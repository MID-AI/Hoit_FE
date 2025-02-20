import { getExampleImages } from "@/apis/service";
import { QUERY_KEY } from "@/constants/query-key";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useGetImageList({
  sort,
  maintag,
  subtag,
}: {
  sort?: string;
  maintag?: number;
  subtag?: number;
}) {
  return useInfiniteQuery({
    queryKey: QUERY_KEY.IMAGE.LIST(sort, maintag, subtag),
    queryFn: ({ pageParam = 0 }) =>
      getExampleImages(pageParam, sort, maintag, subtag),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.data.last ? pages.length : undefined;
    },
  });
}
