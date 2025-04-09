import { apiClient } from "../client/APIClient";
import type { ImageType, PageNation } from "@/@types/images";
import type { FolderType } from "@/@types/folder";
import API_ROUTES from "../constants/routes";

// 내 프로젝트 - 전체
export async function getMyImageList(page: number) {
  return await apiClient.get<PageNation<ImageType>>(API_ROUTES.MY_IMAGES, {
    params: {
      page,
    },
  });
}

// 내 프로젝트 - 폴더
export async function getMyProjectFolder(page: number) {
  return await apiClient.get<PageNation<FolderType>>(
    API_ROUTES.MY_PROJECT_FOLDER,
    {
      params: {
        page,
      },
    },
  );
}

// 내 프로젝트 - 폴더 생성
export async function createFolder(folderName: string) {
  return await apiClient.post(API_ROUTES.MY_PROJECT_FOLDER, {
    name: folderName,
  });
}
