import { getSharedImages } from "@/apis/services/images";
import Hero from "@/components/home/hero";
import HeroSub from "@/components/home/hero-sub";
import ImageListFetcher from "@/components/home/image-list-fetcher";
import InfinitePrefetch from "@/components/query/infinite-prefetch";
import { QUERY_KEY } from "@/constants/query-key";

export default function Home() {
  return (
    <div className="mx-24 flex w-full flex-col justify-center py-32">
      <Hero />
      <HeroSub />
      <header className="mb-10 text-Type-24-bold">갤러리</header>
      <InfinitePrefetch
        queryKey={QUERY_KEY.IMAGE.LIST}
        queryFn={({ pageParam = 0 }) => getSharedImages(pageParam)}
      >
        <ImageListFetcher />
      </InfinitePrefetch>
    </div>
  );
}
