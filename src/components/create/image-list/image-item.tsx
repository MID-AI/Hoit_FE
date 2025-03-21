import Image from "next/image";

function ImageItem({ img }: { img?: string }) {
  return (
    <div className="h-84 w-84 shrink-0 overflow-hidden rounded-22 bg-coolGray-100">
      {img && (
        <Image
          src={img}
          alt="image"
          width={84}
          height={84}
          className="h-full w-full"
        />
      )}
    </div>
  );
}

export default ImageItem;
