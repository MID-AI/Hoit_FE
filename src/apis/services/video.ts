import type { VideoReferenceType } from "@/@types/videos";
import { apiClient } from "../client/APIClient";
import API_ROUTES from "../constants/routes";

// 비디오 생성
export async function createVideo(data: { prompt: string; imageUrl?: string }) {
  return await apiClient.post(API_ROUTES.CREATE.VIDEO, data);
}

// 비디오 레퍼런스
export async function postVideoReference(formData: FormData) {
  return await apiClient.post<VideoReferenceType>(
    API_ROUTES.CREATE.VIDEO_REFERENCE,
    formData,
  );
}
