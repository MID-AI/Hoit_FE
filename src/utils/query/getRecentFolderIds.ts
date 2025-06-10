import type { QueryClient } from "@tanstack/react-query";

/**
 * 최근에 업데이트된 'myProject/folder/[id]' 쿼리의 folder ID 목록을 가져옵니다.
 *
 * @param queryClient - React Query의 QueryClient 인스턴스
 * @param limit - 가져올 folder ID의 최대 개수 (기본값: 10)
 * @returns 최근에 업데이트된 folder ID 배열
 */
export function getRecentFolderIds(
  queryClient: QueryClient,
  limit = 10,
): number[] {
  const recentFolderQueries = queryClient.getQueryCache().findAll({
    predicate: (query) =>
      Array.isArray(query.queryKey) &&
      query.queryKey[0] === "myProject" &&
      query.queryKey[1] === "folder" &&
      typeof query.queryKey[2] === "number",
  });

  return recentFolderQueries
    .sort((a, b) => (b.state.dataUpdatedAt ?? 0) - (a.state.dataUpdatedAt ?? 0))
    .slice(0, limit)
    .map((q) => q.queryKey[2] as number);
}
