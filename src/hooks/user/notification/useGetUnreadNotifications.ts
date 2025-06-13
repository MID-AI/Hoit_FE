import { getUnreadNotifications } from "@/apis/services/notification";
import { QUERY_KEY } from "@/constants/query-key";
import { useInfiniteQuery } from "@tanstack/react-query";

function useGetUnreadNotifications(size?: number) {
  return useInfiniteQuery({
    queryKey: QUERY_KEY.NOTIFICATION.UNREAD,
    queryFn: ({ pageParam }: { pageParam?: string | null }) =>
      getUnreadNotifications({ cursor: pageParam, size }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextPageCursor ?? undefined,
    getPreviousPageParam: (firstPage) =>
      firstPage.previousPageCursor ?? undefined,
  });
}

export default useGetUnreadNotifications;
