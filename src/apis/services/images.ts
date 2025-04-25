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

// 이미지 상세
export async function getImageDetail(imageId: number) {
  return await apiClient.get<ImageType>(API_ROUTES.IMAGE_DETAIL(imageId));
}

// 이미지 생성
export async function createImage(formData: FormData) {
  return await apiClient.post(API_ROUTES.CREATE_IMAGE, formData);
}
