import PAGE_ROUTES from "@/constants/page-routes";
import cn from "@/utils/cn";
import Link from "next/link";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import Image from "next/image";
import CardInfo from "../common/card/CardInfo";

interface Props {
  id: number;
  url: string;
  nickname?: string;
  likeCount: number;
  isLiked: boolean | null;
  onClick?: () => void;
}
function HomeMediaCard({
  id,
  url,
  nickname,
  likeCount,
  isLiked,
  className,
  onClick,
}: Props & {
  className?: string;
}) {
  const isVideo = url.endsWith(".mp4");
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
      href={PAGE_ROUTES.MEDIA_ID(id)}
      className={cn(
        "group relative mb-22 flex w-full break-inside-avoid overflow-hidden rounded-20 bg-white text-Type-14-regular",
        className,
      )}
      onClick={onClick}
    >
      {isVideo ? (
        <video
          src={url}
          onMouseEnter={(e) => e.currentTarget.play()}
          onMouseLeave={(e) => {
            e.currentTarget.pause();
            e.currentTarget.currentTime = 0;
          }}
          className={`h-auto w-full transition-opacity duration-300`}
        />
      ) : (
        <>
          {isLoading && (
            <Skeleton
              className="absolute inset-0 w-full"
              style={{
                height: imageDimensions?.height ?? (isVideo ? 300 : "auto"),
              }}
            />
          )}
          <Image
            src={url}
            alt={`${nickname}의 이미지`}
            width={600}
            height={600}
            className={`h-auto w-full transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
            onLoad={handleImageLoad}
            unoptimized
          />
        </>
      )}

      <CardInfo nickname={nickname} isLiked={isLiked} likeCount={likeCount} />
    </Link>
  );
}

export default HomeMediaCard;
