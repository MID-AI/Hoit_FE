import { getSharedImages } from "@/apis/services/images";
import HeroMain from "@/components/home/HeroMain";
import HomeMediaListContainer from "@/components/home/HomeMediaListContainer";
import InfinitePrefetch from "@/components/query/InfinitePrefetch";
import { QUERY_KEY } from "@/constants/query-key";

export default function Home() {
  return (
    <div className="mx-26 flex w-full flex-col justify-center pt-16">
      <HeroMain />
      <header className="mb-10 text-Type-18-medium">갤러리</header>
      <InfinitePrefetch
        queryKey={QUERY_KEY.IMAGE.LIST("")}
        queryFn={({ pageParam = null }) =>
          getSharedImages({ cursor: pageParam })
        }
      >
        <HomeMediaListContainer />
      </InfinitePrefetch>
    </div>
  );
}
