import { getMyActivityLikes } from "@/apis/services/activity";
import { QUERY_KEY } from "@/constants/query-key";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useGetMyImagesLiked() {
  return useInfiniteQuery({
    queryKey: QUERY_KEY.MY.ACTIVITY_LIKES,
    queryFn: ({ pageParam = 0 }) => getMyActivityLikes(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      return !lastPage.last ? pages.length : undefined;
    },
  });
}
