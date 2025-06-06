import { apiClient } from "../client/APIClient";
import type { ImageType, PageNation } from "@/@types/images";
import type { FolderImagesType, FolderType } from "@/@types/folder";
import API_ROUTES from "../constants/routes";

// 내 프로젝트 - 전체
export async function getMyImageList({
  size = 20,
  cursor,
  direction,
}: {
  size?: number;
  cursor?: string | null;
  direction?: "prev" | "next";
}) {
  return await apiClient.get<PageNation<ImageType>>(API_ROUTES.MY_IMAGES, {
    params: {
      size,
      ...(cursor && direction === "prev" && { prevPageCursor: cursor }),
      ...(cursor && direction === "next" && { nextPageCursor: cursor }),
    },
  });
}

// 폴더에 이미지 추가
export async function addImageToFolder(folderId: number, imageIds: number[]) {
  return await apiClient.post(API_ROUTES.MY_PROJECT_FOLDER_IMAGES(folderId), {
    imageIds,
  });
}

// 내 프로젝트 - 이미지삭제
export async function deleteImages(imageIds: number[]) {
  return await apiClient.delete(API_ROUTES.MY_IMAGES, { imageIds });
}

// 내 프로젝트 - 폴더
export async function getMyProjectFolder({
  cursor,
  size = 20,
  searchValue,
}: {
  cursor?: string | null;
  size?: number;
  searchValue?: string;
}) {
  return await apiClient.get<PageNation<FolderType>>(
    API_ROUTES.MY_PROJECT_FOLDER,
    {
      params: {
        ...(cursor && { cursor }),
        ...(size && { size }),
        ...(searchValue && { searchValue }),
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
// 내 프로젝트 - 폴더 이름 수정
export async function editFolderName(folderId: number, newFolderName: string) {
  return await apiClient.put(API_ROUTES.MY_PROJECT_FOLDER_EDIT_NAME(folderId), {
    name: newFolderName,
  });
}
// 내 프로젝트 - 폴더 삭제
export async function deleteFolder(folderId: number) {
  return await apiClient.delete(API_ROUTES.DELETE_MY_PROJECT_FOLDER(folderId));
}
// 내 프로젝트 - 폴더 내 이미지 리스트
export async function getFolderImages({
  cursor,
  size = 20,
  folderId,
}: {
  cursor?: string | null;
  size?: number;
  folderId: number;
}) {
  return await apiClient.get<FolderImagesType<ImageType>>(
    API_ROUTES.MY_PROJECT_FOLDER_IMAGES(folderId),
    {
      params: {
        ...(cursor && { cursor }),
        ...(size && { size }),
      },
    },
  );
}
// 내 프로젝트 - 폴더 - 이미지삭제
export async function deleteFolderImages(folderId: number, imageIds: number[]) {
  return await apiClient.delete(API_ROUTES.MY_PROJECT_FOLDER_IMAGES(folderId), {
    imageIds,
  });
}
