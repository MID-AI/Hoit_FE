"use client";

import Image from "next/image";
import { useAtomValue } from "jotai";
import { createImageAtom, imageProgressAtom } from "@/stores/create-image-atom";
import DisplayLoading from "./DisplayLoading";
import DisplayDefault from "./DisplayDefault";
import ImageWrapper from "./ImageWrapper";
import DisplayWrapper from "./DisplayWrapper";
import CreationButtonsWrapper from "../buttons/CreationButtonsWrapper";
import { getAspectRatioClass } from "@/utils/getAspectRatioClass";
import cn from "@/utils/cn";

function DisplayImage() {
  const state = useAtomValue(createImageAtom);
  const progress = useAtomValue(imageProgressAtom);
  const { createdImages, ratio, isOptionLocked } = state;
  const aspectRatioClass = getAspectRatioClass(ratio);

  if (isOptionLocked) return <DisplayLoading progress={progress} />;

  if (!createdImages) return <DisplayDefault />;
  const imageCount = createdImages.length;

  if (createdImages && imageCount === 1) {
    return (
      <div
        className={cn(
          `relative h-fit max-h-700 w-fit max-w-700 ${aspectRatioClass}`,
          ratio === "3:4" && "h-full",
          ratio === "16:9" && "my-auto",
        )}
      >
        <Image
          src={createdImages[0]}
          alt="created image"
          width={800}
          height={800}
          loading="lazy"
          className="h-full w-full object-contain"
          unoptimized
        />
        <CreationButtonsWrapper image={createdImages[0]} />
      </div>
    );
  }

  return (
    <DisplayWrapper>
      {createdImages.map((img, idx) => (
        <ImageWrapper key={idx}>
          <Image
            src={img}
            alt={`created image ${idx}`}
            width={800}
            height={800}
            loading="lazy"
            unoptimized
          />
          <CreationButtonsWrapper image={img} />
        </ImageWrapper>
      ))}
    </DisplayWrapper>
  );
}

export default DisplayImage;
