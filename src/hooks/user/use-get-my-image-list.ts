import type { ImageType, PageNation } from "@/@types/images";
import { getMyImageList } from "@/apis/services/project";
import { QUERY_KEY } from "@/constants/query-key";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";

export default function useGetMyImageList(size?: number, searchValue?: string) {
  return useInfiniteQuery<
    PageNation<ImageType>,
    Error,
    InfiniteData<PageNation<ImageType>>,
    ReturnType<typeof QUERY_KEY.MY.PROJECT>,
    string | null
  >({
    queryKey: QUERY_KEY.MY.PROJECT(size),
    queryFn: ({ pageParam }) =>
      getMyImageList({ cursor: pageParam, size, searchValue }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextPageCursor ?? undefined,
    getPreviousPageParam: (firstPage) =>
      firstPage.previousPageCursor ?? undefined,
  });
}
