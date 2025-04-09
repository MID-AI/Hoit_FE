import { getMyActivityPost } from "@/apis/services/activity";
import { QUERY_KEY } from "@/constants/query-key";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useGetMyActivityPosts() {
  return useInfiniteQuery({
    queryKey: QUERY_KEY.MY.ACTIVITY_POST,
    queryFn: ({ pageParam = 0 }) => getMyActivityPost(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      return !lastPage.last ? pages.length : undefined;
    },
  });
}
