import type { UserType } from "@/@types/auth";
import { apiClient } from "../client/APIClient";
import API_ROUTES from "../constants/routes";

export async function getUserInfo(): Promise<UserType> {
  return await apiClient.get<UserType>(API_ROUTES.USER.PROFILE);
}

export async function logout() {
  return await apiClient.post<UserType>(API_ROUTES.AUTH.LOGOUT, null, {
    skipTokenVerification: true,
  });
}
