import CardHorizontal from "@/components/common/card/card-horizontal";

import Header from "@/components/home/header";
import ImageList from "@/components/home/image-list";
import TagCarousel from "@/components/home/tag-carousel";
import PAGE_ROUTES from "@/constants/page-routes";

export default function Home() {
  return (
    <div className="flex w-full flex-col justify-center px-5">
      <Header />
      <div className="flex justify-center gap-8">
        <CardHorizontal
          img="/test2.jpg"
          title="AI이미지"
          tag="생성하러 가기"
          link={PAGE_ROUTES.IMAGE_CREATE}
        />
        <CardHorizontal
          img="/test2.jpg"
          title="나의 무드 찾기"
          tag="무드 찾아보기"
          link={PAGE_ROUTES.MOOD}
        />
      </div>
      <TagCarousel />
      <ImageList />
    </div>
  );
}
