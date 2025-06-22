"use client";

import NoItems from "@/components/common/card/NoItems";
import { MODAL_IMAGE_LIST_BREAKPOINTS } from "@/constants/image-list-breakpoints";
import useGetMyImageList from "@/hooks/user/project/all/useGetMyImageList";

import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Masonry from "react-masonry-css";

function NavigationImageListContainer({
  onClick,
  selectedUrl,
}: {
  onClick: (url: string) => void;
  selectedUrl: string | null;
}) {
  const { data, isLoading, fetchNextPage, hasNextPage } = useGetMyImageList();
  const { ref, inView } = useInView();

  const images = data?.pages.flatMap((page) => page.content).length ?? [];

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isLoading)
    return (
      <span aria-label="이미지 목록 불러오는 중" className="w-full">
        로딩중
      </span>
    );

  if (!images)
    return (
      <div className="flex h-390 w-980 justify-center gap-10 overflow-y-auto">
        <NoItems text="" />
      </div>
    );

  return (
    <>
      <Masonry
        breakpointCols={MODAL_IMAGE_LIST_BREAKPOINTS}
        className="flex h-390 w-full max-w-980 justify-start gap-10 overflow-y-auto"
      >
        {data?.pages.map((page: any) =>
          page.content.map((img: any) => (
            <Image
              key={img.id}
              alt={`${img.id}번 이미지`}
              id={img.id}
              src={img.url}
              width={155}
              height={205}
              className={`mb-9 cursor-pointer rounded-20 ${
                selectedUrl === img.url ? "border-2 border-primary" : ""
              }`}
              onClick={() => onClick(img.url)}
              unoptimized
            />
          )),
        )}
      </Masonry>
      {hasNextPage ? (
        <span ref={ref} aria-label="다음 페이지를 불러오고 있습니다">
          로딩중
        </span>
      ) : (
        <span aria-label="마지막 페이지입니다" />
      )}
    </>
  );
}

export default NavigationImageListContainer;
