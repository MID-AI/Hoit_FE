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
    <section className="flex h-screen w-full items-center justify-between gap-200 py-95">
      <div className="relative ml-180 flex w-full items-center justify-center gap-64">
        <button
          onClick={onPrev}
          disabled={!onPrev}
          aria-label="이전 이미지"
          className={cn(
            "absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50",
            !onPrev && "hidden",
          )}
        >
          <PrevIcon />
        </button>

        <Image
          src={image.url}
          alt="이미지"
          width={800}
          height={800}
          className="max-h-800 max-w-650 object-contain"
          unoptimized
        />
        <button
          onClick={onNext}
          disabled={!onNext}
          aria-label="다음 이미지"
          className={cn(
            "absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50",
            !onNext && "hidden",
          )}
        >
          <NextIcon />
        </button>
      </div>

      <MediaNavWrapper image={image} />
    </section>
  );
}

export default MediaWrapper;
