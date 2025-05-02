import { getMyActivityPost } from "@/apis/services/activity";
import { QUERY_KEY } from "@/constants/query-key";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useGetMyActivityPosts(
  size?: number,
  searchValue?: string,
) {
  return useInfiniteQuery({
    queryKey: QUERY_KEY.MY.ACTIVITY_POST,
    queryFn: ({ pageParam }: { pageParam?: string | null }) =>
      getMyActivityPost({ cursor: pageParam, size, searchValue }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextPageCursor ?? undefined,
    getPreviousPageParam: (firstPage) =>
      firstPage.previousPageCursor ?? undefined,
  });
}
