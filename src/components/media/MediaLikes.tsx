import HeartIcon from "@/assets/icon/heart.svg";
import HeartBlueIcon from "@/assets/icon/heart_blue.svg";
import useLikeMediaMutation from "@/hooks/user/media/useLikeMediaMutation";

function MediaLikes({
  imageId,
  isLiked,
  likeCount,
}: {
  imageId: number;
  isLiked: boolean | null;
  likeCount: number;
}) {
  const { mutate } = useLikeMediaMutation();
  const handleLikeClick = () => {
    if (isLiked === null || isLiked === null) return;
    mutate({ imageId, isLiked });
  };

  return (
    <button onClick={handleLikeClick} className="mr-21 flex items-center gap-7">
      {isLiked ? <HeartBlueIcon /> : <HeartIcon />}
      {likeCount}
    </button>
  );
}

export default MediaLikes;
