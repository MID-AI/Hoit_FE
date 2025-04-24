"use client";

import MediaWrapper from "../media/media-wrapper";
import { InfiniteData, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "@/constants/query-key";
import { ImageType, PageNation } from "@/@types/images";
import useGetImageDetail from "@/hooks/home/use-get-image-detail";

function HomeImageDetailContainer({
  isModal,
  imageId,
}: {
  isModal?: boolean;
  imageId: number;
}) {
  const queryClient = useQueryClient();
  const cachedList = queryClient.getQueryData(
    QUERY_KEY.IMAGE.LIST,
  ) as InfiniteData<PageNation<ImageType>>;

  let image: ImageType | undefined;
  let prevId: number | undefined;
  let nextId: number | undefined;

  if (cachedList) {
    const allImages = cachedList.pages.flatMap((page) => page.content);
    const currentIndex = allImages.findIndex((img) => img.id === imageId);
    image = allImages[currentIndex];
    prevId = allImages[currentIndex - 1]?.id;
    nextId = allImages[currentIndex + 1]?.id;
  }

  const {
    data: fetchedImage,
    isLoading,
    isError,
  } = useGetImageDetail(imageId, { enabled: image === undefined });

  if (!image && isLoading) return <div>로딩 중...</div>;
  if (!image && isError) return <div>이미지를 찾을 수 없습니다</div>;

  const imageToUse = image ?? fetchedImage;
  if (!imageToUse) return <div>이미지를 찾을 수 없습니다</div>;

  return (
    <MediaWrapper
      isModal={isModal}
      image={imageToUse as ImageType}
      prevId={image ? prevId : undefined}
      nextId={image ? nextId : undefined}
    />
  );
}

export default HomeImageDetailContainer;
