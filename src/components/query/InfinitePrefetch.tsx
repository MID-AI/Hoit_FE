import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

interface Props<T> {
  children: React.ReactNode;
  queryKey: readonly (string | number | undefined)[];
  queryFn: ({ pageParam }: { pageParam?: string | null }) => Promise<T>;
  initialPageParam?: string | null;
}

async function InfinitePrefetch<T>({
  children,
  queryKey,
  queryFn,
  initialPageParam = null,
}: Props<T>) {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam,
    getNextPageParam: (lastPage: any) => lastPage.nextPageCursor ?? undefined,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}

export default InfinitePrefetch;
