"use client";

import MediaWrapper from "@/components/media/MediaWrapper";
import { QUERY_KEY } from "@/constants/query-key";
import useGetFolderImages from "@/hooks/user/project/folder/use-get-folder-images";

function FolderImageDetailContainer({
  imageId,
  folderId,
}: {
  imageId: number;
  folderId: number;
}) {
  const { data: cachedList } = useGetFolderImages(folderId);
  const allImages = cachedList?.pages.flatMap((page) => page.content) ?? [];
  const currentIndex = allImages.findIndex((image) => image.id === imageId);
  const prevId = allImages[currentIndex - 1]?.id;
  const nextId = allImages[currentIndex + 1]?.id;

  const currentImage = allImages[currentIndex];

  if (!currentImage) return <div>이미지를 찾을 수 없습니다</div>;

  return (
    <MediaWrapper
      image={currentImage}
      context={QUERY_KEY.MY.PROJECT_FOLDER_IMAGES(folderId)}
      prevId={prevId}
      nextId={nextId}
    />
  );
}

export default FolderImageDetailContainer;
