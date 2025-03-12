"use client";
import { type ImageType } from "@/@types/images";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import HeartWhiteIcon from "@/assets/icon/heart_white.svg";
import HeartBlueIcon from "@/assets/icon/heart_blue.svg";

function Card({ id, url, nickname, likes, isLike }: Omit<ImageType, "prompt">) {
  const [isLoading, setIsLoading] = useState(true);
  const [imageDimensions, setImageDimensions] = useState<{
    height: number;
  } | null>(null);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalHeight } = e.currentTarget;
    setImageDimensions({ height: naturalHeight });
    setIsLoading(false);
  };

  const onClickLike = () => {
    // 좋아요 기능
  };

  return (
    <Link
      href={`image/${id}`}
      className="group relative mb-24 flex w-full break-inside-avoid overflow-hidden rounded-20 bg-white text-Type-14-regular"
    >
      {isLoading && (
        <Skeleton
          className="absolute inset-0 w-full"
          style={{ height: imageDimensions?.height || "auto" }}
        />
      )}
      <Image
        src={url}
        alt="test"
        width={600}
        height={600}
        className={`h-auto w-full transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
        onLoad={handleImageLoad}
      />
      <div className="absolute bottom-0 hidden w-full items-center justify-between bg-[linear-gradient(0deg,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_94.05%)] p-16 text-white group-hover:flex">
        <div>{nickname}</div>
        <div className="flex items-center gap-6">
          <span onClick={onClickLike}>
            {isLike ? <HeartBlueIcon /> : <HeartWhiteIcon />}
          </span>
          <span>{likes}</span>
        </div>
      </div>
    </Link>
  );
}

export default Card;
