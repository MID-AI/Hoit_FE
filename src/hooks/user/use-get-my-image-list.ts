import { getMyImageList } from "@/apis/services/project";
import { QUERY_KEY } from "@/constants/query-key";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useGetMyImageList(pageSize?: number) {
  return useInfiniteQuery({
    queryKey: QUERY_KEY.MY.PROJECT(pageSize),
    queryFn: ({ pageParam = 0 }) => getMyImageList(pageParam, pageSize),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      return !lastPage.last ? pages.length : undefined;
    },
  });
}
