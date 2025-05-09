import type { AspectRatio, VideoModelKey } from "@/constants/select-menu";

export type Notification = {
  id: string;
  type: "image" | "video" | "alert";
  message: string;
  isRead: boolean;
  createdAt: string;
  payload: ImagePayload | VideoPayload;
};

export type ImagePayload = {
  requestId: string;
  imageUrl: string[];
  prompt: string;
  ratio: AspectRatio;
  taskId: string;
  progress?: number;
};

export type VideoPayload = {
  requestId: string;
  videoUrl: string;
  prompt: string;
  model: VideoModelKey;
  taskId: string;
  progress?: number;
};
