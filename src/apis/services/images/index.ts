import type { ImageType, PageNation } from "@/@types/images";
import { apiClient } from "@/apis/client/APIClient";
import API_ROUTES from "@/apis/constants/routes";

export const getUser = () => apiClient.get(API_ROUTES.USER);

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
