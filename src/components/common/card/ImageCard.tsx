"use client";

import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CardInfo from "./CardInfo";
import cn from "@/utils/cn";
import { usePathname } from "next/navigation";

interface Props {
  id: number;
  url: string;
  nickname?: string;
  likeCount: number;
  isLiked: boolean | null;
}

function ImageCard({
  id,
  url,
  nickname,
  likeCount,
  isLiked,
  className,
}: Props & {
  className?: string;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [imageDimensions, setImageDimensions] = useState<{
    height: number;
  } | null>(null);
  const path = usePathname();

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalHeight } = e.currentTarget;
    setImageDimensions({ height: naturalHeight });
    setIsLoading(false);
  };

  return (
    <Link
      href={`${path}/${id}`}
      className={cn(
        "group relative mb-24 flex w-full break-inside-avoid overflow-hidden rounded-20 bg-white text-Type-14-regular",
        className,
      )}
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
        unoptimized
      />
      <CardInfo nickname={nickname} isLiked={isLiked} likeCount={likeCount} />
    </Link>
  );
}

export default ImageCard;
