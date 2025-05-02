import { ImageType, PageNation } from "@/@types/images";
import { getSharedImages } from "@/apis/services/images";
import { QUERY_KEY } from "@/constants/query-key";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useGetImageList() {
  return useInfiniteQuery<
    PageNation<ImageType>,
    Error,
    PageNation<ImageType>,
    typeof QUERY_KEY.IMAGE.LIST,
    string | null
  >({
    queryKey: QUERY_KEY.IMAGE.LIST,
    queryFn: ({ pageParam = null }) => getSharedImages({ cursor: pageParam }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextPageCursor ?? undefined,
    getPreviousPageParam: (firstPage) =>
      firstPage.previousPageCursor ?? undefined,
  });
}
