import type { ImageType, PageNation, ReferenceType } from "@/@types/images";
import { apiClient } from "../client/APIClient";
import API_ROUTES from "../constants/routes";

// 홈 - 공유 이미지 리스트
export async function getSharedImages({
  cursor,
  size = 20,
  searchValue,
}: {
  cursor?: string | null;
  size?: number;
  searchValue?: string;
}) {
  const response = await apiClient.get<PageNation<ImageType>>(
    API_ROUTES.SHARED_IMAGES,
    {
      params: {
        ...(cursor && { cursor }),
        ...(size && { size }),
        ...(searchValue && { searchValue }),
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
export async function createImage(data: {
  prompt: string;
  ratio: string;
  crefUrl?: string;
  srefUrl?: string;
}) {
  return await apiClient.post(API_ROUTES.CREATE_IMAGE, data);
}

// 이미지 레퍼런스
export async function postImageReference(formData: FormData) {
  return await apiClient.post<ReferenceType>(
    API_ROUTES.IMAGE_REFERENCE,
    formData,
  );
}

// 이미지 업스케일
export async function imageUpscale(data: { taskId: string; index: string }) {
  return await apiClient.post(API_ROUTES.IMAGE_UPSCALE, data);
}
