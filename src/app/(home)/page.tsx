import { getSharedImages } from "@/apis/services/images";
import Hero from "@/components/home/hero";
import ImageListFetcher from "@/components/home/image-list-fetcher";
import InfinitePrefetch from "@/components/query/infinite-prefetch";
import { QUERY_KEY } from "@/constants/query-key";

export default function Home() {
  return (
    <div className="mx-26 flex w-full flex-col justify-center py-36">
      <Hero />
      <header className="mb-10 text-Type-18-medium">갤러리</header>
      <InfinitePrefetch
        queryKey={QUERY_KEY.IMAGE.LIST}
        queryFn={({ pageParam = null }) =>
          getSharedImages({ cursor: pageParam })
        }
      >
        <ImageListFetcher />
      </InfinitePrefetch>
    </div>
  );
}
