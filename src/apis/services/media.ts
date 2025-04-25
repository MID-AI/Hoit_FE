import { apiClient } from "../client/APIClient";
import API_ROUTES from "../constants/routes";

// 좋아요
export async function postMediaLike(imageId: number): Promise<void> {
  return await apiClient.post(API_ROUTES.IMAGE_LIKED(imageId));
}

// 포스팅하기
export async function postMediaPosting(imageId: number): Promise<void> {
  return await apiClient.post(API_ROUTES.IMAGE_POSTING(imageId));
}
