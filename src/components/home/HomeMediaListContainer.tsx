"use client";

import useGetImageList from "@/hooks/home/useGetImageList";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Masonry from "react-masonry-css";
import { IMAGE_LIST_BREAKPOINTS } from "@/constants/image-list-breakpoints";
import HomeMediaCard from "./HomeMediaCard";

function HomeMediaListContainer({ nextCursor }: { nextCursor?: string }) {
  const { data, isLoading, fetchNextPage, hasNextPage } = useGetImageList(
    nextCursor ? { cursor: nextCursor } : {},
  );

  const { ref, inView } = useInView();
  const isAllEmpty = data?.pages[0].content.length === 0;

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isLoading)
    return (
      <div aria-label="이미지 목록 불러오는 중" className="w-full">
        로딩중
      </div>
    );

  return (
    <>
      {isAllEmpty ? (
        <div className="py-10 text-center text-gray-500">
          이미지가 없습니다.
        </div>
      ) : (
        <>
          <Masonry
            breakpointCols={IMAGE_LIST_BREAKPOINTS}
            className="flex justify-start gap-20 md:pl-0 lg:px-0"
          >
            {data?.pages.map((page: any) =>
              page.content.map((img: any) => (
                <HomeMediaCard
                  key={img.id}
                  id={img.id}
                  url={img.url}
                  nickname={img.member.nickname}
                  likeCount={img.likeCount}
                  isLiked={img?.isLiked}
                />
              )),
            )}
          </Masonry>
          {hasNextPage ? (
            <div ref={ref} aria-label="다음 페이지를 불러오고 있습니다">
              로딩중
            </div>
          ) : (
            <div aria-label="마지막 페이지입니다" />
          )}
        </>
      )}
    </>
  );
}

export default HomeMediaListContainer;
