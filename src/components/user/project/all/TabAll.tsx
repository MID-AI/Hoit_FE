"use client";

import { isAllEmptyAtom } from "@/stores/project-atom";
import { useSetAtom } from "jotai";
import { Suspense, useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import NoItems from "@/components/common/card/NoItems";
import useGetMyImageList from "@/hooks/user/project/all/useGetMyImageList";
import useGroupedImages from "@/hooks/media/useGroupedImages";
import TabAllImageList from "./list/TabAllImageList";
import PAGE_ROUTES from "@/constants/page-routes";
import dynamic from "next/dynamic";

const Media = dynamic(() => import("@/components/media/MediaModal"), {
  ssr: false,
});

function TabAll() {
  const { data, isLoading, fetchNextPage, hasNextPage } = useGetMyImageList();
  const setIsAllEmpty = useSetAtom(isAllEmptyAtom);
  const { ref, inView } = useInView();

  const allImages = useMemo(
    () => data?.pages.flatMap((page) => page.content) ?? [],
    [data],
  );
  const isEmpty = data?.pages[0].content.length === 0;

  const grouped = useGroupedImages(allImages);

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
      {Object.entries(grouped).map(([date, images]) => {
        return <TabAllImageList key={date} date={date} images={images} />;
      })}
      {hasNextPage ? (
        <div ref={ref} className="mt-8 text-center text-gray-400">
          다음 페이지 불러오는 중...
        </div>
      ) : (
        <div className="sr-only mt-8 text-center text-gray-400">
          마지막 페이지입니다.
        </div>
      )}
      <Suspense fallback={null}>
        <Media images={allImages} pageRoute={PAGE_ROUTES.MY_PROJECT_ALL} />
      </Suspense>
    </>
  );
}

export default TabAll;
