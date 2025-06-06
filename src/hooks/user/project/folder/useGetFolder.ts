import { getMyProjectFolder } from "@/apis/services/project";
import { QUERY_KEY } from "@/constants/query-key";
import { useInfiniteQuery } from "@tanstack/react-query";

/**
 * 수정 작업
 * 서버 데이터는 오프셋 기반 페이지네이션으로 되어있음
 * cursor로 변경?
 */

export default function useGetFolder(size?: number) {
  return useInfiniteQuery({
    queryKey: QUERY_KEY.MY.PROJECT_FOLDER,
    queryFn: ({ pageParam }: { pageParam?: string | null }) =>
      getMyProjectFolder({ cursor: pageParam, size }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextPageCursor ?? undefined,
    getPreviousPageParam: (firstPage) =>
      firstPage.previousPageCursor ?? undefined,
  });
}
