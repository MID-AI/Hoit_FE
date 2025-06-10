import Logo from "@/assets/logo/logo.svg";
import ToggleIcon from "@/assets/icon/toggle.svg";
import Image from "next/image";
import MediaLikes from "./MediaLikes";
import MediaDownload from "./MediaDownload";
import MediaShare from "./MediaShare";
import MediaPrompt from "./MediaPrompt";
import MediaRatio from "./MediaRatio";
import MediaPostingButton from "./MediaPostingButton";
import type { ImageType } from "@/@types/images";

function MediaNav({
  onClick,
  image,
}: {
  onClick: () => void;
  image: ImageType;
}) {
  return (
    <nav className="mr-128 h-full">
      <div className="relative h-fit w-448 rounded-22 bg-white px-25 pb-42 pt-36">
        <div className="mb-38 flex items-end justify-between">
          <Logo className="h-30 w-50" />
          <button onClick={onClick} aria-label="네비게이션 닫기">
            <ToggleIcon />
          </button>
        </div>
        <div className="mb-29 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Image
              src={image.member.profileImage}
              alt={`${image.member.nickname}의 프로필이미지`}
              height={24}
              width={24}
              className="aspect-square shrink rounded-full"
              unoptimized
            />
            <span>{image.member.nickname}</span>
          </div>

          <div className="flex items-center">
            <MediaLikes
              imageId={image.id}
              isLiked={image.isLiked}
              likeCount={image.likeCount}
            />
            <MediaDownload image={image.url} />
            <MediaShare isShared={image.isShared} />
          </div>
        </div>
        <MediaPrompt prompt={image.prompt} />
        <MediaRatio />
        <MediaPostingButton
          imageId={image.id}
          isShared={image.isShared}
          className="absolute bottom-25 right-25"
        />
      </div>
    </nav>
  );
}

export default MediaNav;
