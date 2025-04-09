import type { ImageType, PageNation } from "@/@types/images";
import { apiClient } from "../client/APIClient";
import API_ROUTES from "../constants/routes";

// 내 활동 - 포스팅
export async function getMyActivityPost(page: number) {
  return await apiClient.get<PageNation<ImageType>>(
    API_ROUTES.MY_ACTIVITY_POSTS,
    {
      params: {
        page,
      },
    },
  );
}

// 내 활동 - 좋아요
export async function getMyActivityLikes(page: number) {
  return await apiClient.get<PageNation<ImageType>>(
    API_ROUTES.MY_ACTIVITY_LIKES,
    {
      params: {
        page,
      },
    },
  );
}
