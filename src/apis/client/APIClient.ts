import { getAccessTokenFromCookies } from "@/utils/cookies-server";
import handleAPIError from "../utils/handleAPIError";
import { SERVER_URL } from "./baseUrl";
import HTTPError from "../error/HTTPError";
import API_ROUTES from "../constants/routes";

export const BASE_URL = SERVER_URL;

// 요청 설정 타입
interface RequestConfig extends RequestInit {
  params?: Record<string, string | number>;
  withCredentials?: boolean;
}

/**
 * API 클라이언트 클래스
 */
class APIClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  /**
   * URL 생성 메서드
   */
  private createURL(
    path: string,
    params?: Record<string, string | number>,
  ): string {
    const url = new URL(`${this.baseURL}/${path}`);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }

    return url.toString();
  }

  /**
   * 요청 헤더 생성 메서드
   */
  private async createHeaders(config?: RequestConfig): Promise<Headers> {
    const headers = new Headers({
      Accept: "application/json",
      ...(!config?.body || !(config.body instanceof FormData)
        ? { "Content-Type": "application/json" }
        : {}),
    });

    // 서버 환경일 때만 쿠키 추가
    if (typeof window === "undefined") {
      const serializedCookies = await getAccessTokenFromCookies();
      if (serializedCookies) {
        headers.append("Cookie", serializedCookies);
      }
    }

    // 사용자 정의 헤더 덮어쓰기
    if (config?.headers) {
      Object.entries(config.headers).forEach(([key, value]) => {
        headers.set(key, value);
      });
    }

    return headers;
  }

  private async verifyAndRefreshToken(): Promise<void> {
    try {
      await this.request(API_ROUTES.REFRESH_TOKEN, {
        method: "POST",
        credentials: "include",
      });
    } catch {
      throw handleAPIError(
        401,
        "로그인이 만료되었습니다. 다시 로그인해 주세요.",
        "TOKEN_EXPIRATION",
      );
    }
  }

  /**
   * API 요청 메서드
   */
  private async request<T>(
    path: string,
    config?: RequestConfig,
    retry = true,
    skipTokenVerification = false,
  ): Promise<T> {
    try {
      const url = this.createURL(path, config?.params);
      const headers = await this.createHeaders(config);

      const response = await fetch(url, {
        ...config,
        headers,
        credentials: "include",
        body:
          config?.body instanceof FormData
            ? config.body
            : config?.body
              ? JSON.stringify(config.body)
              : undefined,
      });

      if (!response.ok) {
        const errorJson = await response.json();
        if (response.status === 401 && retry && !skipTokenVerification) {
          try {
            await this.verifyAndRefreshToken();
            return this.request<T>(path, config, false);
          } catch {
            throw handleAPIError(
              401,
              "로그인이 만료되었습니다. 다시 로그인해 주세요.",
              "TOKEN_EXPIRATION",
            );
          }
        }
        handleAPIError(response.status, errorJson.message, errorJson.error);
      }

      try {
        const text = await response.text();
        return text ? (JSON.parse(text) as T) : (null as T);
      } catch {
        return null as T;
      }
    } catch (error: any) {
      if (error instanceof HTTPError) {
        throw error;
      }

      throw handleAPIError(500, error.message);
    }
  }

  // HTTP 메서드
  async get<T>(
    path: string,
    config?: Omit<RequestConfig, "body"> & { skipTokenVerification?: boolean },
  ) {
    return this.request<T>(
      path,
      { ...config, method: "GET" },
      true,
      config?.skipTokenVerification,
    );
  }

  async post<T>(
    path: string,
    body?: any,
    config?: RequestConfig & { skipTokenVerification?: boolean },
  ) {
    return this.request<T>(
      path,
      { ...config, body, method: "POST" },
      true,
      config?.skipTokenVerification,
    );
  }

  async patch<T>(path: string, body?: any, config?: RequestConfig) {
    return this.request<T>(path, { ...config, body, method: "PATCH" });
  }

  async put<T>(path: string, body?: any, config?: RequestConfig) {
    return this.request<T>(path, { ...config, body, method: "PUT" });
  }

  async delete<T>(path: string, body?: any, config?: RequestConfig) {
    return this.request<T>(path, { ...config, body, method: "DELETE" });
  }
}

// API 클라이언트 인스턴스 생성
export const apiClient = new APIClient(BASE_URL || "");
