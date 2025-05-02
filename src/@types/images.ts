import type { AspectRatio } from "@/constants/select-menu";
import type { UserType } from "./auth";

export interface APIResponse<T> {
  timestamp: string;
  statusCode: number;
  message: string;
  data: T;
}

export interface PageNation<T> {
  content: T[];
  previousPageCursor: string | null;
  nextPageCursor: string | null;
}

export interface ImageType {
  member: Omit<UserType, "credit">;
  id: number;
  url: string;
  prompt: string;
  nickname?: string;
  ratio: string;
  createdAt: string;
  likeCount: number;
  isLiked: boolean | null;
  isPosted?: boolean;
}

export interface ReferenceType {
  crefImage: string;
  srefImage: string;
}

export interface CreatedImageType {
  taskId: string;
  imageUrls: string[];
  prompt: string;
  ratio: AspectRatio;
}
