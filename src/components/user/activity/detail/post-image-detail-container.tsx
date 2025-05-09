"use client";

import MediaWrapper from "@/components/media/media-wrapper";
import { QUERY_KEY } from "@/constants/query-key";
import useGetMyActivityPosts from "@/hooks/user/activity/use-get-my-activity-posts";

function PostImageDetailContainer({ imageId }: { imageId: number }) {
  const { data: cachedList } = useGetMyActivityPosts();
  const allImages = cachedList?.pages.flatMap((page) => page.content) ?? [];
  const currentIndex = allImages.findIndex((image) => image.id === imageId);
  const prevId = allImages[currentIndex - 1]?.id;
  const nextId = allImages[currentIndex + 1]?.id;

  const currentImage = allImages[currentIndex];

  if (!currentImage) return <div>이미지를 찾을 수 없습니다</div>;

  return (
    <MediaWrapper
      image={currentImage}
      context={QUERY_KEY.MY.ACTIVITY_POST}
      prevId={prevId}
      nextId={nextId}
    />
  );
}

export default PostImageDetailContainer;
