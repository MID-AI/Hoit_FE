"use client";

import { PopoverContent } from "../ui/popover";
import NoNotification from "./NoNotification";
import NotificationAllDelete from "./NotificationAllDelete";
import NotificationItem from "./NotificationItem";

const alarmList = [
  {
    id: 0,
    type: "image",
    status: "string",
    message: "이미지 생성이 완료되었습니다",
    createdAt: "2025-06-11T08:21:20.611Z",
    payload: {},
    read: true,
  },
  {
    id: 1,
    type: "image",
    status: "string",
    message: "이미지 생성이 완료되었습니다",
    createdAt: "2025-06-11T08:21:20.611Z",
    payload: {},
    read: true,
  },
  {
    id: 2,
    type: "image",
    status: "string",
    message: "이미지 생성이 완료되었습니다",
    createdAt: "2025-06-11T08:21:20.611Z",
    payload: {},
    read: true,
  },
  {
    id: 3,
    type: "image",
    status: "string",
    message: "이미지 생성이 완료되었습니다",
    createdAt: "2025-06-11T08:21:20.611Z",
    payload: {},
    read: true,
  },
  {
    id: 4,
    type: "image",
    status: "string",
    message: "이미지 생성이 완료되었습니다",
    createdAt: "2025-06-11T08:21:20.611Z",
    payload: {},
    read: true,
  },
  {
    id: 5,
    type: "image",
    status: "string",
    message: "이미지 생성이 완료되었습니다",
    createdAt: "2025-06-11T08:21:20.611Z",
    payload: {},
    read: true,
  },
  {
    id: 6,
    type: "image",
    status: "string",
    message: "이미지 생성이 완료되었습니다",
    createdAt: "2025-06-11T08:21:20.611Z",
    payload: {},
    read: true,
  },
  {
    id: 7,
    type: "image",
    status: "string",
    message: "이미지 생성이 완료되었습니다",
    createdAt: "2025-06-11T08:21:20.611Z",
    payload: {},
    read: true,
  },
  {
    id: 8,
    type: "image",
    status: "string",
    message: "이미지 생성이 완료되었습니다",
    createdAt: "2025-06-11T08:21:20.611Z",
    payload: {},
    read: true,
  },
];

function NotificationContent({
  setPopoverOpen,
}: {
  setPopoverOpen: (open: boolean) => void;
}) {
  const isEmpty = alarmList.length === 0;

  return (
    <PopoverContent
      side="top"
      // sideOffset={10}
      className="w-screen rounded-20 py-12 sm:block sm:h-502 sm:w-264 md:translate-x-60 md:translate-y-40 lg:translate-x-100"
    >
      <div className="flex items-start justify-between px-12">
        <div>알림</div>
        <div onClick={() => setPopoverOpen(false)}>x</div>
      </div>

      {isEmpty ? (
        <NoNotification />
      ) : (
        <div className="flex h-full flex-col">
          <div className="mb-12 mt-12 flex items-start justify-between px-12">
            <div>전체</div>
            <NotificationAllDelete />
          </div>
          <div className="flex max-h-404 flex-1 flex-col gap-12 overflow-y-scroll pl-12">
            {alarmList.map((alarm) => (
              <NotificationItem
                key={alarm.id}
                createdAt={alarm.createdAt}
                text={alarm.message}
                alarmId={alarm.id}
              />
            ))}
          </div>
        </div>
      )}
    </PopoverContent>
  );
}

export default NotificationContent;
