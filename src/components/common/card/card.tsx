"use client";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Card({ id, img }: { id: number; img: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [imageDimensions, setImageDimensions] = useState<{
    height: number;
  } | null>(null);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalHeight } = e.currentTarget;
    setImageDimensions({ height: naturalHeight });
    setIsLoading(false);
  };

  return (
    <Link
      href={`image/${id}`}
      className="relative mb-17 flex w-full break-inside-avoid overflow-hidden rounded-22"
    >
      {isLoading && (
        <Skeleton
          className="absolute inset-0 w-full"
          style={{ height: imageDimensions?.height || "auto" }}
        />
      )}
      <Image
        src={img}
        alt="test"
        width={600}
        height={600}
        className={`h-auto w-full transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
        onLoad={handleImageLoad}
      />
    </Link>
  );
}

export default Card;
