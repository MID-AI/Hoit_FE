import API_ROUTES from "@/apis/constants/routes";
import { apiClient } from "../APIClient";

export async function login() {
  const response = await apiClient.get(API_ROUTES.LOGIN, {
    withCredentials: true,
  });

  return response;
}
