import ToggleIcon from "@/assets/icon/toggle.svg";
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
    <nav className="relative flex h-fit w-full max-w-500 flex-col justify-center rounded-22 bg-white px-25 pb-42 pt-24">
      <div className="mb-32 flex items-center justify-between">
        <div className="flex items-center">
          <MediaLikes
            imageId={image.id}
            isLiked={image.isLiked}
            likeCount={image.likeCount}
          />
          <MediaDownload image={image.url} />
          <MediaShare isShared={image.isShared} />
        </div>
        <button onClick={onClick} aria-label="네비게이션 닫기">
          <ToggleIcon />
        </button>
      </div>

      <MediaPrompt prompt={image.prompt} />
      <MediaRatio />
      <MediaPostingButton
        imageId={image.id}
        isShared={image.isShared}
        className="absolute bottom-25 right-25 mt-29"
      />
    </nav>
  );
}

export default MediaNav;
