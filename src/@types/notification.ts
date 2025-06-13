import { ImageType } from "./images";

export interface NotificationType {
  id: number;
  type: string;
  status: string;
  message: string;
  createdAt: string;
  payload: ImageType | null;
  read: boolean;
}
