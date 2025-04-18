import { getAccessTokenFromCookies } from "@/utils/cookies-server";
import handleAPIError from "../utils/handleAPIError";
import { SERVER_URL } from "./baseUrl";
import HTTPError from "../error/HTTPError";

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
    const accessToken =
      typeof window === "undefined" ? await getAccessTokenFromCookies() : "";

    const headers = new Headers({
      Accept: "application/json",
      ...(!config?.body || !(config.body instanceof FormData)
        ? { "Content-Type": "application/json" }
        : {}),
      ...(accessToken ? { Cookie: `_hoauth=${accessToken}` } : {}),
    });

    // 추가 헤더
    if (config?.headers) {
      Object.entries(config.headers).forEach(([key, value]) => {
        headers.append(key, value);
      });
    }

    return headers;
  }

  /**
   * API 요청 메서드
   */
  private async request<T>(path: string, config?: RequestConfig): Promise<T> {
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
        handleAPIError(response.status, errorJson.message, errorJson.error);
      }

      return await response.json();
    } catch (error: any) {
      if (error instanceof HTTPError) {
        throw error;
      }

      throw handleAPIError(500, error.message);
    }
  }

  // HTTP 메서드
  async get<T>(path: string, config?: Omit<RequestConfig, "body">) {
    return this.request<T>(path, { ...config, method: "GET" });
  }

  async post<T>(path: string, body?: any, config?: RequestConfig) {
    return this.request<T>(path, { ...config, body, method: "POST" });
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
