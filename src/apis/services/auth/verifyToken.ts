import { apiClient } from "@/apis/client/APIClient";
import API_ROUTES from "@/apis/constants/routes";
import { NextRequest } from "next/server";

export default function verifyToken(request?: NextRequest) {
  const config = request
    ? {
        headers: {
          Cookie: request.headers.get("cookie") || "",
        },
      }
    : undefined;
  return apiClient.get(API_ROUTES.REFRESH_TOKEN, config);
}
