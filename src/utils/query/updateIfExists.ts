type Props = {
  queryClient: any;
  key: unknown;
  updater: (old: any) => any;
  prevCache?: Record<string, unknown>;
  shouldRefetch?: boolean;
};

/**
 * 캐시에 해당 queryKey의 데이터가 존재하면 업데이트하거나, 리패치합니다.
 *
 * @param queryClient - React Query의 QueryClient 인스턴스
 * @param key - 대상 쿼리의 key
 * @param updater - 데이터를 업데이트할 함수
 * @param prevCache - 변경 전 데이터를 저장할 객체 (옵션)
 * @param shouldRefetch - true이면 invalidate하여 refetch 수행 (기본: false)
 */
export function updateIfExists({
  queryClient,
  key,
  updater,
  prevCache,
  shouldRefetch = false,
}: Props) {
  const oldData = queryClient.getQueryData(key);
  if (!oldData) return;

  if (prevCache) {
    prevCache[JSON.stringify(key)] = oldData;
  }

  if (!shouldRefetch) {
    queryClient.setQueryData(key, updater);
  } else {
    queryClient.invalidateQueries(key);
  }
}
