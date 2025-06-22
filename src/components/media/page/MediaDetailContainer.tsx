"use client";

import useGetImageDetail from "@/hooks/home/useGetImageDetail";
import MediaDetailSection from "./MediaDetailSection";
import HomeMediaListContainer from "@/components/home/HomeMediaListContainer";

function MediaDetailContainer({ imageId }: { imageId: number }) {
  const { data, isLoading } = useGetImageDetail(imageId);

  if (isLoading)
    return (
      <div aria-label="이미지 목록 불러오는 중" className="w-full">
        로딩중
      </div>
    );

  if (!data) return null;

  return (
    <>
      <MediaDetailSection {...data!} />
      <HomeMediaListContainer nextCursor={data?.nextCursor} />
    </>
  );
}

export default MediaDetailContainer;
