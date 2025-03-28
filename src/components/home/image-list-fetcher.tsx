import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ImageList from "./image-list";
import { getSharedImages } from "@/apis/services/images";

async function ImageListFetcher() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["imageList"],
    queryFn: ({ pageParam = 0 }) => getSharedImages(pageParam),
    initialPageParam: 0,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ImageList />
    </HydrationBoundary>
  );
}

export default ImageListFetcher;
