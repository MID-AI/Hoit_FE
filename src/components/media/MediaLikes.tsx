import HeartIcon from "@/assets/icon/heart.svg";
import HeartBlueIcon from "@/assets/icon/heart_blue.svg";
import useLikeMediaMutation from "@/hooks/user/media/useLikeMediaMutation";
import cn from "@/utils/cn";
import throttle from "@/utils/throttle";
import ElementLoginChecker from "../common/auth/ElementLoginChecker";

function MediaLikes({
  imageId,
  isLiked,
  likeCount,
  className,
}: {
  imageId: number;
  isLiked: boolean | null;
  likeCount: number;
  className?: string;
}) {
  const { mutate } = useLikeMediaMutation();
  const handleLikeClick = throttle(() => {
    if (isLiked === null) return;
    mutate({ imageId, isLiked });
  }, 1000);

  return (
    <ElementLoginChecker>
      <button
        onClick={handleLikeClick}
        className={cn("mr-21 flex items-center gap-7", className)}
      >
        {isLiked ? <HeartBlueIcon /> : <HeartIcon />}
        {likeCount}
      </button>
    </ElementLoginChecker>
  );
}

export default MediaLikes;
