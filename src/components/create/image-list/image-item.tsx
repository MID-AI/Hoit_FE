import Image from "next/image";

function ImageItem({
  img,
  createAt,
  onClick,
}: {
  img?: string;
  createAt?: string;
  onClick: () => void;
}) {
  return (
    <div className="h-84 w-84 shrink-0 overflow-hidden rounded-22 bg-coolGray-100">
      {img && (
        <Image
          src={img}
          alt={`${createAt} 생성 이미지`}
          width={84}
          height={84}
          className="h-full w-full"
          onClick={onClick}
        />
      )}
    </div>
  );
}

export default ImageItem;
