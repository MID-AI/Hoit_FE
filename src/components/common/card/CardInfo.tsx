import HeartWhiteIcon from "@/assets/icon/heart.svg";
import HeartBlueIcon from "@/assets/icon/heart_blue.svg";

interface Props {
  nickname?: string;
  isLiked?: boolean | null;
  likeCount: number;
}

function CardInfo({ nickname, isLiked, likeCount }: Props) {
  const onClickLike = () => {
    // 좋아요 기능
  };
  return (
    <div className="absolute bottom-0 hidden w-full items-center justify-between bg-[linear-gradient(0deg,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_94.05%)] p-16 text-white group-hover:flex">
      <div>{nickname}</div>
      <div className="flex items-center gap-6">
        <span onClick={onClickLike}>
          {isLiked ? (
            <HeartBlueIcon />
          ) : (
            <HeartWhiteIcon className="text-white" />
          )}
        </span>
        <span>{likeCount}</span>
      </div>
    </div>
  );
}

export default CardInfo;
