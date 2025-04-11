import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

interface Props<T> {
  children: React.ReactNode;
  queryKey: readonly (string | number | undefined)[];
  queryFn: ({ pageParam }: { pageParam?: number }) => Promise<T>;
  initialPageParam?: number;
}

async function InfinitePrefetch<T>({
  children,
  queryKey,
  queryFn,
  initialPageParam = 0,
}: Props<T>) {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam,
    getNextPageParam: (lastPage: any, pages: any) => {
      return !lastPage.last ? pages.length : undefined;
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}

export default InfinitePrefetch;
