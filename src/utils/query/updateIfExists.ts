type Props = {
  queryClient: any;
  key: unknown;
  updater: (old: any) => any;
  prevCache?: Record<string, unknown>;
  shouldRefetch?: boolean;
};

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
