import type { ImageType } from "@/@types/images";
import type { PageNation } from "@/@types/response";
import { getMyImageList } from "@/apis/services/project";
import { QUERY_KEY } from "@/constants/query-key";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";

type PageParam = { cursor: string | null; direction: "prev" | "next" };

export default function useGetMyImageList(size = 20, type?: "image" | "video") {
  return useInfiniteQuery<
    PageNation<ImageType>,
    Error,
    InfiniteData<PageNation<ImageType>>,
    ReturnType<typeof QUERY_KEY.MY.PROJECT>,
    PageParam | null
  >({
    queryKey: QUERY_KEY.MY.PROJECT(size, type),
    queryFn: ({ pageParam }) =>
      getMyImageList({
        size,
        type: type ?? null,
        cursor: pageParam?.cursor ?? null,
        direction: pageParam?.direction ?? "next",
      }),
    initialPageParam: { cursor: null, direction: "next" },

    getNextPageParam: (lastPage) =>
      lastPage.nextPageCursor
        ? { cursor: lastPage.nextPageCursor, direction: "next" }
        : undefined,

    getPreviousPageParam: (firstPage) =>
      firstPage.previousPageCursor
        ? { cursor: firstPage.previousPageCursor, direction: "prev" }
        : undefined,
  });
}
