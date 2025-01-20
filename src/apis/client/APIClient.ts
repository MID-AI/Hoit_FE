import BASE_URL from "./baseUrl";

const baseHeader = {
  "Content-Type": "application/json",
};

type HTTPMethod = "GET" | "POST" | "PATCH" | "DELETE";

interface RequestConfig {
  method: HTTPMethod;
  headers?: Record<string, string>;
  body?: any;
}

async function apiRequest<T = any>(
  path: string,
  config: RequestConfig,
): Promise<T> {
  const url = `${BASE_URL}/${path}`;
  const response = await fetch(url, {
    method: config.method,
    headers: config.headers,
    body:
      config.body instanceof FormData
        ? config.body
        : config.body
          ? JSON.stringify(config.body)
          : undefined,
  });

  if (!response.ok) {
    throw new Error(
      `${config.method} 요청에서 에러가 발생했습니다. (url: ${url})`,
    );
  }

  return response.json();
}

export const apiClient = {
  get: <T>(path: string) => apiRequest<T>(path, { method: "GET" }),

  post: <T>(path: string, body: any) => {
    const headers = body instanceof FormData ? undefined : baseHeader;
    return apiRequest<T>(path, {
      method: "POST",
      headers,
      body,
    });
  },

  patch: <T>(path: string, body?: any) => {
    return apiRequest<T>(path, {
      method: "PATCH",
      body,
    });
  },

  delete: <T>(path: string, body?: any) =>
    apiRequest<T>(path, {
      method: "DELETE",
      body,
    }),
};
