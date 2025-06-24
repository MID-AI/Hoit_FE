"use client";

import { PopoverContent } from "../ui/popover";
import { useState } from "react";
import XIcon from "@/assets/icon/X.svg";
import AllNotification from "./AllNotification";
import useDeleteNotifications from "@/hooks/user/notification/useDeleteNotifications";
import useGetAllNotifications from "@/hooks/user/notification/useGetAllNotifications";
import dynamic from "next/dynamic";
import { LoaderCircle } from "lucide-react";

const UnreadNotification = dynamic(() => import("./UnreadNotification"), {
  ssr: false, // 클라이언트에서만 사용 시
  loading: () => (
    <div className="flex h-full w-full flex-1 items-center justify-center">
      <LoaderCircle className="animate-spin text-coolGray-500" />
    </div>
  ),
});

function NotificationContent({
  setPopoverOpen,
}: {
  setPopoverOpen: (open: boolean) => void;
}) {
  const [tab, setTab] = useState<"all" | "unread">("all");

  const { data, hasNextPage, fetchNextPage } = useGetAllNotifications();
  const deleteMutate = useDeleteNotifications();

  const isEmpty = data?.pages[0].content.length === 0;

  return (
    <PopoverContent
      side="top"
      // sideOffset={10}
      className="h-screen w-screen rounded-20 py-12 sm:block sm:max-h-502 sm:w-264 sm:border md:translate-x-60 md:translate-y-40 lg:translate-x-100"
    >
      <div className="flex items-start justify-between border-b px-12 pb-6 text-Type-20-bold">
        <div>알림</div>
        <button onClick={() => setPopoverOpen(false)}>
          <XIcon className="scale-[0.6] text-coolGray-600" />
        </button>
      </div>
      <div className="my-10 flex items-center justify-between px-12">
        <div className="flex gap-12 text-Type-16-medium">
          <button
            onClick={() => setTab("all")}
            className={`${tab === "all" ? "text-coolGray-800" : "text-coolGray-400"}`}
          >
            전체
          </button>
          <button
            onClick={() => setTab("unread")}
            className={`${tab === "unread" ? "text-coolGray-800" : "text-coolGray-400"}`}
          >
            읽지 않음
          </button>
        </div>
        {!isEmpty && (
          <button
            onClick={() => deleteMutate.mutate()}
            className="h-fit rounded-20 border border-coolGray-300 bg-coolGray-100 px-8 py-6 text-Type-14-regular"
          >
            전체삭제
          </button>
        )}
      </div>
      {tab === "all" ? (
        <AllNotification
          isEmpty={isEmpty}
          data={data}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      ) : (
        <UnreadNotification />
      )}
    </PopoverContent>
  );
}

export default NotificationContent;
