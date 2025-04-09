import { getMyProjectFolder } from "@/apis/services/project";
import { QUERY_KEY } from "@/constants/query-key";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useGetMyProjectFolder() {
  return useInfiniteQuery({
    queryKey: QUERY_KEY.MY.PROJECT_FOLDER,
    queryFn: ({ pageParam = 0 }) => getMyProjectFolder(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      return !lastPage.last ? pages.length : undefined;
    },
  });
}
