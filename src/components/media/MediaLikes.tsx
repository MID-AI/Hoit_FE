import HeartIcon from "@/assets/icon/heart.svg";
import HeartBlueIcon from "@/assets/icon/heart_blue.svg";
import useLikeMediaMutation from "@/hooks/user/media/use-like-media-mutation";

function MediaLikes({
  imageId,
  isLiked,
  likeCount,
  context,
  isList = true,
}: {
  imageId: number;
  isLiked: boolean | null;
  likeCount: number;
  context?: readonly unknown[];
  isList?: boolean;
}) {
  const { mutate } = useLikeMediaMutation({
    queryKey: context,
    isList: isList,
  });
  const handleLikeClick = () => {
    if (isLiked === null) return;
    mutate(imageId);
  };

  return (
    <button onClick={handleLikeClick} className="mr-21 flex items-center gap-7">
      {isLiked ? <HeartBlueIcon /> : <HeartIcon />}
      {likeCount}
    </button>
  );
}

export default MediaLikes;
