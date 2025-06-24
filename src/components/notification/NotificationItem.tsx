"use client";

import RemoveIcon from "@/assets/icon/circle_x.svg";
import useMarkNotificationAsRead from "@/hooks/user/notification/useMarkNotificationAsRead";
import dayjs from "dayjs";

function NotificationItem({
  createdAt,
  text,
  alarmId,
  isRead,
}: {
  createdAt: string;
  text: string;
  alarmId: number;
  isRead: boolean;
}) {
  const notificationMutate = useMarkNotificationAsRead();

  const handleClick = () => {
    notificationMutate.mutate(alarmId);
  };
  const date = dayjs(createdAt).format("MM.DD");

  return (
    <div className="flex w-full items-center justify-between rounded-8 border border-coolGray-200 bg-coolGray-50 p-8 text-Type-12-regular">
      <div>
        <span className="mr-8">{date}</span>
        <span>{text}</span>
      </div>
      {!isRead && (
        <button onClick={handleClick}>
          <RemoveIcon />
        </button>
      )}
    </div>
  );
}

export default NotificationItem;
