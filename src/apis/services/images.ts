import type { ImageType, PageNation } from "@/@types/images";
import { apiClient } from "../client/APIClient";
import API_ROUTES from "../constants/routes";

// 홈 - 공유 이미지 리스트
export async function getSharedImages(page: number) {
  const response = await apiClient.get<PageNation<ImageType>>(
    API_ROUTES.SHARED_IMAGES,
    {
      params: {
        page,
      },
    },
  );

  return response;
}
