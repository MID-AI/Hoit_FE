import type { AspectRatio, VideoModelKey } from "@/constants/select-menu";

export type Notification = {
  id: string;
  type: "IMAGE" | "VIDEO" | "ALERT";
  status: "PENDING" | "SUCCESS" | "ERROR";
  message: string;
  read: boolean;
  createdAt: string;
  payload: ImagePayload | VideoPayload;
};

export type ImagePayload = {
  requestId: string;
  imageUrl: string[];
  prompt: string;
  ratio: AspectRatio;
  taskId: string;
  index: number;
  isUpscaled: boolean;
  progress?: string;
};

export type VideoPayload = {
  requestId: string;
  videoUrl: string;
  prompt: string;
  model: VideoModelKey;
  taskId: string;
  progress?: string;
};
