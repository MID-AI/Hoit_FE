import { getSharedImages } from "@/apis/services/images";
import { QUERY_KEY } from "@/constants/query-key";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useGetImageList({
  cursor = null,
}: {
  cursor?: string | null;
}) {
  return useInfiniteQuery({
    queryKey: QUERY_KEY.IMAGE.LIST(cursor ?? ""),
    queryFn: ({ pageParam = null }: { pageParam?: string | null }) =>
      getSharedImages({ cursor: pageParam }),
    initialPageParam: cursor ?? null,
    getNextPageParam: (lastPage) => lastPage.nextPageCursor ?? undefined,
    getPreviousPageParam: (firstPage) =>
      firstPage.previousPageCursor ?? undefined,
  });
}
