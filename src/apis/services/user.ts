import type { UserType } from "@/@types/auth";
import { apiClient } from "../client/APIClient";
import API_ROUTES from "../constants/routes";

export async function getUserInfo(): Promise<UserType> {
  return await apiClient.get<UserType>(API_ROUTES.USER, {
    skipTokenVerification: true,
  });
}

export async function logout() {
  return await apiClient.post<UserType>(API_ROUTES.LOGOUT, null, {
    skipTokenVerification: true,
  });
}
