"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import NotificationItem from "./NotificationItem";
import NoNotification from "./NoNotification";

interface Props {
  isEmpty: boolean;
  data: any;
  hasNextPage: boolean;
  fetchNextPage: () => void;
}

function AllNotification({ isEmpty, data, hasNextPage, fetchNextPage }: Props) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isEmpty) return <NoNotification />;

  return (
    <>
      <div className="flex max-h-404 flex-1 flex-col gap-12 overflow-y-scroll pl-12">
        {data?.pages.map((page: any) =>
          page.content.map((alarm: any) => (
            <NotificationItem
              key={alarm.id}
              createdAt={alarm.createdAt}
              text={alarm.message}
              alarmId={alarm.id}
              isRead={alarm.read}
            />
          )),
        )}
      </div>
      {hasNextPage ? (
        <div ref={ref} aria-label="다음 페이지를 불러오고 있습니다">
          로딩중
        </div>
      ) : (
        <div aria-label="마지막 페이지입니다" />
      )}
    </>
  );
}

export default AllNotification;
