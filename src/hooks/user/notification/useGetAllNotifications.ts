import { getNotifications } from "@/apis/services/notification";
import { QUERY_KEY } from "@/constants/query-key";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useGetAllNotifications() {
  return useInfiniteQuery({
    queryKey: QUERY_KEY.NOTIFICATION.ALL,
    queryFn: ({ pageParam }: { pageParam?: string | null }) =>
      getNotifications({ cursor: pageParam }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextPageCursor ?? undefined,
    getPreviousPageParam: (firstPage) =>
      firstPage.previousPageCursor ?? undefined,
  });
}
