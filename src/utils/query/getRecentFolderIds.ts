import type { QueryClient } from "@tanstack/react-query";

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
