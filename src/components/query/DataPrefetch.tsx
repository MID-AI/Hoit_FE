import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

interface Props<T> {
  children: React.ReactNode;
  queryKey: readonly (string | number | undefined)[];
  queryFn: () => Promise<T>;
}

async function DataPrefetch<T>({ children, queryKey, queryFn }: Props<T>) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey,
    queryFn,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}

export default DataPrefetch;
