"use client";

import { isAllEmptyAtom } from "@/stores/project-atom";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import NoItems from "@/components/common/card/NoItems";
import useGetMyImageList from "@/hooks/user/project/all/useGetMyImageList";
import useMediaNavigation from "@/hooks/media/useMediaNavigation";
import useGroupedImages from "@/hooks/media/useGroupedImages";
import TabAllImageList from "./list/TabAllImageList";
import MediaModal from "@/components/media/MediaModal";
import PAGE_ROUTES from "@/constants/page-routes";

function TabAll() {
  const { data, isLoading, fetchNextPage, hasNextPage } = useGetMyImageList();
  const setIsAllEmpty = useSetAtom(isAllEmptyAtom);
  const { ref, inView } = useInView();

  const allImages = data?.pages.flatMap((page) => page.content) ?? [];
  const isEmpty = data?.pages[0].content.length === 0;

  const grouped = useGroupedImages(allImages); // 날짜별 그룹핑
  const { mediaId, showNext, showPrev, closeModal, hasNext, hasPrev } =
    useMediaNavigation(allImages, PAGE_ROUTES.MY_PROJECT_ALL); // mediaId → 탐색 로직 처리

  useEffect(() => {
    setIsAllEmpty(isEmpty);
  }, [isEmpty, setIsAllEmpty]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isLoading) return <div className="w-full">로딩중</div>;
  if (isEmpty) return <NoItems text="이미지와 영상을 생성해 보세요!" />;

  return (
    <>
      {Object.entries(grouped).map(([date, images]) => (
        <TabAllImageList
          key={date}
          date={date}
          images={images}
          hasNextPage={hasNextPage}
          ref={ref}
        />
      ))}
      {mediaId ? (
        <MediaModal
          mediaId={mediaId}
          images={allImages}
          onClose={closeModal}
          onNext={hasNext ? showNext : undefined}
          onPrev={hasPrev ? showPrev : undefined}
        />
      ) : null}
    </>
  );
}

export default TabAll;
