import NextIcon from "@/assets/icon/next.svg";
import PrevIcon from "@/assets/icon/prev.svg";
import Image from "next/image";
import MediaNavWrapper from "./MediaNavWrapper";
import { ImageType } from "@/@types/images";
import cn from "@/utils/cn";

interface Props {
  image: ImageType;
  onNext?: () => void;
  onPrev?: () => void;
}

function MediaWrapper({ image, onPrev, onNext }: Props) {
  return (
    <section className="grid w-full grid-flow-row grid-rows-[2fr_1rf] items-center justify-center gap-24 px-16 lg:grid-flow-col lg:grid-rows-none lg:gap-64 lg:py-95">
      <div className="relative flex w-full items-center justify-end gap-32">
        <button
          onClick={onPrev}
          disabled={!onPrev}
          aria-label="이전 이미지"
          className={cn(
            "rounded-full bg-black/30 p-2 text-white hover:bg-black/50",
            !onPrev && "hidden",
          )}
        >
          <PrevIcon />
        </button>
        <div>
          <Image
            src={image.url}
            alt="이미지"
            width={800}
            height={800}
            className="h-full max-h-650 w-full min-w-300 max-w-650 object-contain"
            unoptimized
          />
        </div>

        <button
          onClick={onNext}
          disabled={!onNext}
          aria-label="다음 이미지"
          className={cn(
            "rounded-full bg-black/30 p-2 text-white hover:bg-black/50",
            !onNext && "hidden",
          )}
        >
          <NextIcon />
        </button>
      </div>
      <div className="hidden lg:block">
        <MediaNavWrapper image={image} />
      </div>
    </section>
  );
}

export default MediaWrapper;
