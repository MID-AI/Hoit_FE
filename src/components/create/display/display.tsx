import ArrowIcon from "@/assets/icon/arrow_left.svg";
import Image from "next/image";

function Display({ image }: { image?: string[] }) {
  return (
    <div className="flex h-full max-h-786 w-full items-center justify-center gap-44">
      <ArrowIcon className="cursor-pointer text-coolGray-300" />
      {image ? (
        <div>
          {image.map((img) => (
            <Image key={img} src={img} alt="image" width={800} height={800} />
          ))}
        </div>
      ) : (
        <div className="h-full w-full max-w-786 bg-coolGray-100" />
      )}

      <ArrowIcon className="rotate-180 cursor-pointer text-coolGray-300" />
    </div>
  );
}

export default Display;
