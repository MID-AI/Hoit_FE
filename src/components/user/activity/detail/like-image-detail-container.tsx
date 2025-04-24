"use client";

import MediaWrapper from "@/components/media/media-wrapper";
import useGetMyImagesLiked from "@/hooks/user/use-get-my-images-liked";

function LikeImageDetailContainer({
  isModal,
  imageId,
}: {
  isModal?: boolean;
  imageId: number;
}) {
  const { data: cachedList } = useGetMyImagesLiked();
  const allImages = cachedList?.pages.flatMap((page) => page.content) ?? [];
  const currentIndex = allImages.findIndex((image) => image.id === imageId);
  const prevId = allImages[currentIndex - 1]?.id;
  const nextId = allImages[currentIndex + 1]?.id;

  const currentImage = allImages[currentIndex];
  if (!currentImage) return <div>이미지를 찾을 수 없습니다</div>;

  return (
    <MediaWrapper
      isModal={isModal}
      image={currentImage}
      context={"like"}
      prevId={prevId}
      nextId={nextId}
    />
  );
}

export default LikeImageDetailContainer;
