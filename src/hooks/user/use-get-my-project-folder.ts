import { getMyProjectFolder } from "@/apis/services/project";
import { QUERY_KEY } from "@/constants/query-key";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useGetMyProjectFolder(
  size?: number,
  searchValue?: string,
) {
  return useInfiniteQuery({
    queryKey: QUERY_KEY.MY.PROJECT_FOLDER,
    queryFn: ({ pageParam }: { pageParam?: string | null }) =>
      getMyProjectFolder({ cursor: pageParam, size, searchValue }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextPageCursor ?? undefined,
    getPreviousPageParam: (firstPage) =>
      firstPage.previousPageCursor ?? undefined,
  });
}
