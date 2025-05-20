"use client";

import MediaWrapper from "@/components/media/MediaWrapper";
import { QUERY_KEY } from "@/constants/query-key";
import useGetMyImagesLiked from "@/hooks/user/activity/use-get-my-images-liked";

function LikeImageDetailContainer({ imageId }: { imageId: number }) {
  const { data: cachedList } = useGetMyImagesLiked();
  const allImages = cachedList?.pages.flatMap((page) => page.content) ?? [];
  const currentIndex = allImages.findIndex((image) => image.id === imageId);
  const prevId = allImages[currentIndex - 1]?.id;
  const nextId = allImages[currentIndex + 1]?.id;

  const currentImage = allImages[currentIndex];
  if (!currentImage) return <div>이미지를 찾을 수 없습니다</div>;

  return (
    <MediaWrapper
      image={currentImage}
      context={QUERY_KEY.MY.ACTIVITY_LIKES}
      prevId={prevId}
      nextId={nextId}
    />
  );
}

export default LikeImageDetailContainer;
