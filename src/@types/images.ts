import type { AspectRatio } from "@/constants/select-menu";
import type { UserType } from "./auth";

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
  taskId?: string | null;
  index?: number | null;
  isShared: boolean | null;
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
