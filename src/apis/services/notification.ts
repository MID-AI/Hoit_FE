import type { PageNation } from "@/@types/response";
import type { NotificationType } from "@/@types/notification";
import { apiClient } from "../client/APIClient";
import API_ROUTES from "../constants/routes";

// 전체 알림 조회
export async function getNotifications({
  size = 20,
  cursor,
}: {
  cursor?: string | null;
  size?: number;
}) {
  return await apiClient.get<PageNation<NotificationType>>(
    API_ROUTES.NOTIFICATION.UNREAD,
    {
      params: {
        ...(cursor && { cursor }),
        ...(size && { size }),
      },
    },
  );
}

// 읽지 않은 알림 전체 조회
export async function getUnreadNotifications({
  size = 20,
  cursor,
}: {
  cursor?: string | null;
  size?: number;
}) {
  return await apiClient.get<PageNation<NotificationType>>(
    API_ROUTES.NOTIFICATION.UNREAD,
    {
      params: {
        ...(cursor && { cursor }),
        ...(size && { size }),
      },
    },
  );
}

// 알림 하나 읽음 처리
export async function patchNotificationAsRead(
  notificationId: number,
): Promise<void> {
  return await apiClient.patch(API_ROUTES.NOTIFICATION.AS_READ(notificationId));
}

// 알림 전체 삭제
export async function deleteNotifications(): Promise<void> {
  return await apiClient.delete(API_ROUTES.NOTIFICATION.ALL);
}
