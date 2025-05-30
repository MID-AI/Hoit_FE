"use client";

import MediaWrapper from "../media/MediaWrapper";
import { InfiniteData, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "@/constants/query-key";
import { ImageType, PageNation } from "@/@types/images";
import useGetImageDetail from "@/hooks/home/use-get-image-detail";

function HomeImageDetailContainer({ imageId }: { imageId: number }) {
  const queryClient = useQueryClient();
  const cachedList = queryClient.getQueryData(
    QUERY_KEY.IMAGE.LIST,
  ) as InfiniteData<PageNation<ImageType>>;

  let image: ImageType | undefined;
  let prevId: number | undefined;
  let nextId: number | undefined;
  let context: readonly unknown[] | undefined = undefined;
  let isList: boolean = false;

  if (cachedList) {
    const allImages = cachedList.pages.flatMap((page) => page.content);
    const currentIndex = allImages.findIndex((img) => img.id === imageId);
    image = allImages[currentIndex];
    prevId = allImages[currentIndex - 1]?.id;
    nextId = allImages[currentIndex + 1]?.id;
    context = QUERY_KEY.IMAGE.LIST;
    isList = true;
  }

  const {
    data: fetchedImage,
    isLoading,
    isError,
  } = useGetImageDetail(imageId, { enabled: image === undefined });

  if (!image && isLoading) return <div>로딩 중...</div>;
  if (!image && isError) return <div>이미지를 찾을 수 없습니다</div>;

  const imageToUse = image ?? fetchedImage;
  if (!image && fetchedImage) {
    context = QUERY_KEY.IMAGE.DETAIL(imageId);
    isList = false;
  }
  if (!imageToUse) return <div>이미지를 찾을 수 없습니다</div>;

  return (
    <MediaWrapper
      image={imageToUse as ImageType}
      prevId={image ? prevId : undefined}
      nextId={image ? nextId : undefined}
      context={context}
      isList={isList}
    />
  );
}

export default HomeImageDetailContainer;
