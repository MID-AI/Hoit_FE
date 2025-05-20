import cn from "@/utils/cn";
import Image from "next/image";

function ImageItem({
  img,
  createAt,
  onClick,
  isClicked = false,
}: {
  img?: string;
  createAt?: string;
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
      {img && (
        <Image
          src={img}
          alt={`${createAt} 생성 이미지`}
          width={84}
          height={84}
          className="h-full w-full"
          onClick={onClick}
          unoptimized
        />
      )}
    </div>
  );
}

export default ImageItem;
