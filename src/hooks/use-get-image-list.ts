import { getExampleImages } from "@/apis/service";
import { QUERY_KEY } from "@/constants/query-key";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useGetImageList() {
  return useInfiniteQuery({
    queryKey: QUERY_KEY.IMAGE.LIST,
    queryFn: ({ pageParam = 0 }) => getExampleImages(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      return !lastPage.data.last ? pages.length : undefined;
    },
  });
}
