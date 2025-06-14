import type { UserType } from "@/@types/auth";
import { apiClient } from "../client/APIClient";
import API_ROUTES from "../constants/routes";

export async function getUserInfo(): Promise<UserType> {
  return await apiClient.get<UserType>(API_ROUTES.USER);
}

// 닉네임 변경하기
interface UpdateNicknameRequest {
  nickname: string;
}

export async function updateUserNickname(nickname: string): Promise<UserType> {
  return await apiClient.put<UserType>(API_ROUTES.EDIT_NICKNAME, { nickname });
}
