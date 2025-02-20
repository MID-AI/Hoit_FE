import CardHorizontal from "@/components/common/card/card-horizontal";
import Header from "@/components/home/header";
import ImageListFetcher from "@/components/home/image-list-fetcher";
import SubTagList from "@/components/home/filters/sub-tag-list";
import TagCarousel from "@/components/home/filters/tag-carousel";
import PAGE_ROUTES from "@/constants/page-routes";
import Sort from "@/components/home/filters/sort";

export default function Home() {
  return (
    <div className="mx-24 flex w-full flex-col justify-center py-32">
      <Header />
      <div className="flex justify-center gap-26 rounded-20 bg-white p-42">
        <CardHorizontal
          img="/test1.png"
          title="AI이미지"
          tag="생성하러 가기"
          link={PAGE_ROUTES.IMAGE_CREATE}
        />
        <CardHorizontal
          img="/test2.png"
          title="나의 무드 찾기"
          tag="무드 찾아보기"
          link={PAGE_ROUTES.MOOD}
        />
      </div>
      <TagCarousel />
      <div className="mb-32 flex gap-12">
        <Sort />
        <SubTagList />
      </div>

      <ImageListFetcher />
    </div>
  );
}
