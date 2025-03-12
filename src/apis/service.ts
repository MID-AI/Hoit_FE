import type { ImageType, APIResponse, PageNation } from "@/@types/images";
import { apiClient } from "./client/APIClient";
import API_ROUTES from "./constants/routes";

export const getUser = () => apiClient.get(API_ROUTES.USER);

export async function getExampleImages(page: number) {
  const response = await apiClient.get<APIResponse<PageNation<ImageType>>>(
    API_ROUTES.EXAMPLE_IMAGE_LIST,
    {
      params: {
        page,
      },
    },
  );

  return response;
}
