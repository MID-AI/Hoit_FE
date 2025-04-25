import ArrowIcon from "@/assets/icon/arrow_left.svg";
import Image from "next/image";
import ScreenStarIcon from "@/assets/create/screen_star.svg";
import cn from "@/utils/cn";

function Display({
  isLoading,
  image,
}: {
  isLoading: boolean;
  image?: string[];
}) {
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
        <div className="flex h-full w-full max-w-786 items-center justify-center bg-coolGray-100 text-white">
          <ScreenStarIcon
            className={cn("h-355 w-353", isLoading && "animate-spin")}
          />
        </div>
      )}

      <ArrowIcon className="rotate-180 cursor-pointer text-coolGray-300" />
    </div>
  );
}

export default Display;
