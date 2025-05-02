import type { ImageType, PageNation } from "@/@types/images";
import { apiClient } from "../client/APIClient";
import API_ROUTES from "../constants/routes";

// 내 활동 - 포스팅
export async function getMyActivityPost({
  cursor,
  size = 20,
  searchValue,
}: {
  cursor?: string | null;
  size?: number;
  searchValue?: string;
}) {
  return await apiClient.get<PageNation<ImageType>>(
    API_ROUTES.MY_ACTIVITY_POSTS,
    {
      params: {
        ...(cursor && { cursor }),
        ...(size && { size }),
        ...(searchValue && { searchValue }),
      },
    },
  );
}

// 내 활동 - 좋아요
export async function getMyActivityLikes({
  cursor,
  size = 20,
  searchValue,
}: {
  cursor?: string | null;
  size?: number;
  searchValue?: string;
}) {
  return await apiClient.get<PageNation<ImageType>>(
    API_ROUTES.MY_ACTIVITY_LIKES,
    {
      params: {
        ...(cursor && { cursor }),
        ...(size && { size }),
        ...(searchValue && { searchValue }),
      },
    },
  );
}
