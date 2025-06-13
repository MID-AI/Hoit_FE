import type { PageNation } from "./response";

export interface FolderType {
  id: number;
  name: string;
  imageCount: number;
  videoCount: number;
  coverImage: string;
  modifiedAt: string;
}

export interface FolderImagesType<T> {
  id: number;
  name: string;
  images: PageNation<T>;
}
