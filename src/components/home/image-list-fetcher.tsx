import { getExampleImages } from "@/apis/service";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ImageList from "./image-list";

async function ImageListFetcher() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["imageList", null, null, null],
    queryFn: ({ pageParam = 0 }) => getExampleImages(pageParam),
    initialPageParam: 0,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ImageList />
    </HydrationBoundary>
  );
}

export default ImageListFetcher;
