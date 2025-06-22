import Image from "next/image";
import LogoBlack from "@/assets/logo/logo_black.svg";
import HeroButton from "./HeroButton";
import ImageIcon from "@/assets/icon/hero_icon_image.svg";
import VideoIcon from "@/assets/icon/hero_icon_video.svg";
import PAGE_ROUTES from "@/constants/page-routes";

function HeroMain() {
  return (
    <header className="relative mb-30 h-266 w-full">
      <div className="absolute z-10 flex h-full w-full flex-col justify-between gap-14 px-40 pb-32 pt-28 text-28 font-semibold text-coolGray-800 md:text-40">
        <div>
          <p className="flex items-center gap-14">
            상상을 현실로, AI 애니메이션{" "}
            <LogoBlack className="hidden lg:block" />
          </p>
          <p className="mt-6 text-Type-14-medium md:text-Type-20-medium">
            고품질 무료 AI이미지와 영상을 제작해보세요!
          </p>
        </div>

        <p className="flex gap-12">
          <HeroButton
            href={PAGE_ROUTES.IMAGE_CREATE}
            text="이미지 생성하기"
            icon={<ImageIcon />}
          />
          <HeroButton
            href={PAGE_ROUTES.VIDEO_CREATE}
            text="영상 생성하기"
            icon={<VideoIcon />}
          />
        </p>
      </div>
      <div className="relative h-266 w-full">
        <Image
          src="/main/hero1.png"
          fill
          alt="밤의 도시와 그 풍경을 보는 캐릭터들 일러스트"
          priority
          className="rounded-20 object-cover"
        />
        <div className="to-black/1 absolute inset-0 bg-gradient-to-r from-[#F8F8F8] via-transparent" />
      </div>
    </header>
  );
}

export default HeroMain;
