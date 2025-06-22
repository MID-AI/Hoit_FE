import type { ImageType, ReferenceType } from "@/@types/images";
import type { PageNation } from "@/@types/response";
import { apiClient } from "../client/APIClient";
import API_ROUTES from "../constants/routes";

// 홈 - 공유 이미지 리스트
export async function getSharedImages({
  cursor,
  size = 20,
}: {
  cursor?: string | null;
  size?: number;
}) {
  return await apiClient.get<PageNation<ImageType>>(API_ROUTES.IMAGE.SHARED, {
    params: {
      ...(cursor && { cursor }),
      ...(size && { size }),
    },
  });
}

// 이미지 상세
export async function getImageDetail(imageId: number) {
  return await apiClient.get<ImageType>(API_ROUTES.IMAGE.DETAIL(imageId), {
    params: {
      size: 1,
    },
  });
}

// 이미지 생성
export async function createImage(data: {
  prompt: string;
  ratio: string;
  crefUrl?: string;
  srefUrl?: string;
}) {
  return await apiClient.post(API_ROUTES.CREATE.IMAGE, data);
}

// 이미지 레퍼런스
export async function postImageReference(formData: FormData) {
  return await apiClient.post<ReferenceType>(
    API_ROUTES.CREATE.IMAGE_REFERENCE,
    formData,
  );
}

// 이미지 업스케일
export async function imageUpscale(data: { taskId: string; index: string }) {
  return await apiClient.post(API_ROUTES.CREATE.UPSCALE, data);
}
