import { getMyActivityLikes } from "@/apis/services/activity";
import { QUERY_KEY } from "@/constants/query-key";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useGetMyImagesLiked(
  size?: number,
  searchValue?: string,
) {
  return useInfiniteQuery({
    queryKey: QUERY_KEY.MY.ACTIVITY_LIKES,
    queryFn: ({ pageParam }: { pageParam?: string | null }) =>
      getMyActivityLikes({ cursor: pageParam, size, searchValue }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextPageCursor ?? undefined,
    getPreviousPageParam: (firstPage) =>
      firstPage.previousPageCursor ?? undefined,
  });
}
