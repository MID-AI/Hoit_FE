import type { Image, APIResponse, PageNation } from "@/@types/images";
import { apiClient } from "./client/APIClient";
import API_ROUTES from "./constants/routes";

export const getUser = () => apiClient.get(API_ROUTES.USER);

export async function getExampleImages(
  page: number,
  sort?: string,
  maintag?: number,
  subtag?: number,
) {
  const response = await apiClient.get<APIResponse<PageNation<Image>>>(
    API_ROUTES.EXAMPLE_IMAGE_LIST,
    {
      params: {
        page,
        ...(sort && { sort }),
        ...(maintag && { maintag }),
        ...(subtag && { subtag }),
      },
    },
  );

  return response;
}
