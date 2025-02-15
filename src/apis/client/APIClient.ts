import { SWRConfiguration } from "swr";
import handleAPIError from "../utils/handleAPIError";
import SERVER_URL from "./baseUrl";

export const BASE_URL = SERVER_URL;

// 요청 설정 타입
interface RequestConfig extends RequestInit {
  params?: Record<string, string | number>;
  withCredentials?: boolean;
}

// SWR 기본 설정
export const swrConfig: SWRConfiguration = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  shouldRetryOnError: false,
};

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
  private createHeaders(config?: RequestConfig): Headers {
    const headers = new Headers({
      Accept: "application/json",
      ...(!config?.body || !(config.body instanceof FormData)
        ? { "Content-Type": "application/json" }
        : {}),
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
      const headers = this.createHeaders(config);

      const response = await fetch(url, {
        ...config,
        headers,
        credentials: config?.withCredentials ? "include" : "same-origin",
        body:
          config?.body instanceof FormData
            ? config.body
            : config?.body
              ? JSON.stringify(config.body)
              : undefined,
      });

      if (!response.ok) {
        handleAPIError(response.status);
      }

      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw handleAPIError(500, error.message);
      }
      throw error;
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

  async delete<T>(path: string, body?: any, config?: RequestConfig) {
    return this.request<T>(path, { ...config, body, method: "DELETE" });
  }
}

// API 클라이언트 인스턴스 생성
export const apiClient = new APIClient(BASE_URL || "");
