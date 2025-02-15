import type { ImageList, Image } from "@/@types/images";
import { apiClient } from "./client/APIClient";
import API_ROUTES from "./constants/routes";

export const getUser = () => apiClient.get(API_ROUTES.USER);

export async function getExampleImages(page: number, limit: number = 10) {
  const response = await apiClient.get<ImageList<Image>>(
    API_ROUTES.EXAMPLE_IMAGE_LIST,
    {
      params: { page, limit },
    },
  );

  return response;
}
