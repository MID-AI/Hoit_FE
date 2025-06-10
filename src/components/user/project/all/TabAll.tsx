"use client";

import { isAllEmptyAtom } from "@/stores/project-atom";
import { useSetAtom } from "jotai";
import { Suspense, useEffect } from "react";
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

  const allImages = data?.pages.flatMap((page) => page.content) ?? [];
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
      {Object.entries(grouped).map(([date, images]) => (
        <TabAllImageList
          key={date}
          date={date}
          images={images}
          hasNextPage={hasNextPage}
          ref={ref}
        />
      ))}
      <Suspense fallback={null}>
        <Media images={allImages} pageRoute={PAGE_ROUTES.MY_PROJECT_ALL} />
      </Suspense>
    </>
  );
}

export default TabAll;
