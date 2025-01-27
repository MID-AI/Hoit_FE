import BASE_URL from "./baseUrl";

type HTTPMethod = "GET" | "POST" | "PATCH" | "DELETE";

type RequestConfig = {
  method: HTTPMethod;
  body?: any;
  headers?: Record<string, string>;
};

async function fetcher<T>(
  url: string,
  { method, body, headers }: RequestConfig,
): Promise<T> {
  const response = await fetch(`${BASE_URL}/${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const error = new Error(`HTTP Error: ${response.status}`);
    throw error;
  }

  return response.json();
}

export const get = <T>(url: string) => fetcher<T>(url, { method: "GET" });

export const post = <T>(url: string, body: any) =>
  fetcher<T>(url, { method: "POST", body });

export const patch = <T>(url: string, body: any) =>
  fetcher<T>(url, { method: "PATCH", body });

export const del = <T>(url: string, body?: any) =>
  fetcher<T>(url, { method: "DELETE", body });
