// import ImageListFetcher from "@/components/home/image-list-fetcher";
import ImageList from "@/components/home/image-list";
import Hero from "@/components/home/hero";
import HeroSub from "@/components/home/hero-sub";

export default function Home() {
  return (
    <div className="mx-24 flex w-full flex-col justify-center py-32">
      <Hero />
      <HeroSub />

      <ImageList />
      {/* <ImageListFetcher /> */}
    </div>
  );
}
