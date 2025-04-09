"use client";

import Masonry from "react-masonry-css";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Card from "@/components/common/card/card";

interface Props {
  data: any;
  isLoading: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

function ImageList({ data, isLoading, fetchNextPage, hasNextPage }: Props) {
  const { ref, inView } = useInView();
  const isAllEmpty = data?.pages[0].empty;

  const breakpoints = {
    default: 4,
    1024: 3,
    768: 2,
    540: 1,
  };

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
            breakpointCols={breakpoints}
            className="flex justify-start gap-20 md:pl-0 lg:px-0"
          >
            {data?.pages.map((page: any) =>
              page.content.map((img: any) => (
                <Card
                  key={img.id}
                  id={img.id}
                  url={img.url}
                  nickname={img.nickname}
                  likeCount={img.likes}
                  isLiked={img?.isLike}
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

export default ImageList;
