"use client";

import Card from "../common/card/card";
import Masonry from "react-masonry-css";
import { useInView } from "react-intersection-observer";

import useGetImageList from "@/hooks/use-get-image-list";
import { useEffect } from "react";
import { Skeleton } from "../ui/skeleton";
import { useAtom } from "jotai";
import {
  selectedTagAtom,
  selectedSubTagAtom,
  sortAtom,
} from "@/stores/tags-atom";

function ImageList() {
  const [maintag] = useAtom(selectedTagAtom);
  const [subtag] = useAtom(selectedSubTagAtom);
  const [sort] = useAtom(sortAtom);
  const { ref, inView } = useInView({
    threshold: 0.1, // 10%가 보였을 때 트리거
  });

  const { data, isLoading, fetchNextPage, hasNextPage } = useGetImageList(
    Object.fromEntries(
      Object.entries({ sort, maintag, subtag }).filter(
        ([, value]) => value !== null || value !== 0,
      ),
    ),
  );

  const breakpoints = {
    default: 4,
    1024: 3,
    768: 2,
    540: 1,
  };

  // const images = mockData.content;
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);
  if (isLoading)
    return (
      <div aria-label="이미지 목록 불러오는 중">
        {[...Array(12)].map((_, idx) => (
          <div key={idx} className="grid grid-cols-4 gap-17 md:pl-0 lg:px-0">
            <Skeleton className="h-40 w-full" />
          </div>
        ))}
      </div>
    );

  return (
    <>
      <Masonry
        breakpointCols={breakpoints}
        className="flex justify-start gap-17 md:pl-0 lg:px-0"
      >
        {data?.pages.map((page) =>
          page.data.content.map((img) => (
            <Card key={img.id} id={img.id} img={img.url} />
          )),
        )}
      </Masonry>
      {hasNextPage ? (
        <div ref={ref} aria-label="다음 페이지를 불러오고 있습니다">
          <Skeleton />
        </div>
      ) : (
        <div aria-label="마지막 페이지입니다" />
      )}
    </>
  );
}

export default ImageList;
