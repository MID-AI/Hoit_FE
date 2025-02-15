import { BASE_URL } from "@/apis/client/APIClient";
import API_ROUTES from "@/apis/constants/routes";
import mockData from "@/mocks/data/imageList.json";
import { http, HttpResponse } from "msw";

export const mockHomeImage = http.get(
  `${BASE_URL + "/" + API_ROUTES.EXAMPLE_IMAGE_LIST}`,
  () => {
    // const url = new URL(request.url);
    // const page = url.searchParams.get("page") || "1";
    // const limit = url.searchParams.get("limit") || "10";

    return HttpResponse.json(mockData);
  },
);
