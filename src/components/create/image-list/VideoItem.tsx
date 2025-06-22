import cn from "@/utils/cn";

function VideoItem({
  video,
  createAt,
  onClick,
  isClicked = false,
}: {
  video: string | null;
  createAt: string | null;
  onClick: () => void;
  isClicked: boolean;
}) {
  return (
    <div
      className={cn(
        "h-84 w-84 shrink-0 overflow-hidden rounded-22 bg-coolGray-100",
        isClicked && "h-96 w-96 outline outline-1 outline-cBlue-500",
      )}
    >
      {video ? (
        <video
          src={video}
          aria-label={`${createAt} 생성 이미지`}
          width={84}
          height={84}
          className="h-full w-full"
          onClick={onClick}
        />
      ) : (
        <span className="sr-only">빈 슬롯</span>
      )}
    </div>
  );
}

export default VideoItem;
