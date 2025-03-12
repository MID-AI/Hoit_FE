import PAGE_ROUTES from "@/constants/page-routes";
import CardHorizontal from "../common/card/card-horizontal";

function HeroSub() {
  return (
    <div className="flex w-full justify-center gap-26 rounded-20">
      <CardHorizontal
        img="/main/card1.png"
        title="AI이미지 만들기"
        content="고품질 무료 ai 이미지를 체험해보세요!"
        tag="생성하러 가기"
        link={PAGE_ROUTES.IMAGE_CREATE}
      />
      <CardHorizontal
        img="/main/card2.png"
        title="AI영상 만들기"
        content="나만의 애니메이션을 제작해보세요!"
        tag="무드 찾아보기"
        link={PAGE_ROUTES.MOOD}
      />
    </div>
  );
}

export default HeroSub;
