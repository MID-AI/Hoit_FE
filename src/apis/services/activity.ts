import type { ImageType } from "@/@types/images";
import type { PageNation } from "@/@types/response";
import { apiClient } from "../client/APIClient";
import API_ROUTES from "../constants/routes";

// 내 활동 - 포스팅
export async function getMyActivityPost({
  size = 20,
  cursor,
}: {
  cursor?: string | null;
  size?: number;
}) {
  return await apiClient.get<PageNation<ImageType>>(
    API_ROUTES.MY_ACTIVITY_POSTS,
    {
      params: {
        ...(cursor && { cursor }),
        ...(size && { size }),
      },
    },
  );
}

// 내 활동 - 좋아요
export async function getMyActivityLikes({
  cursor,
  size = 20,
}: {
  cursor?: string | null;
  size?: number;
}) {
  return await apiClient.get<PageNation<ImageType>>(
    API_ROUTES.MY_ACTIVITY_LIKES,
    {
      params: {
        ...(cursor && { cursor }),
        ...(size && { size }),
      },
    },
  );
}
