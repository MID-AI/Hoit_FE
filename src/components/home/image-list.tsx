"use client";

import Card from "../common/card/card";
import Masonry from "react-masonry-css";

import type { Image, ImageList } from "@/@types/images";
import useSWRInfinite from "swr/infinite";
import API_ROUTES from "@/apis/constants/routes";
import { getExampleImages } from "@/apis/service";
import { useInView } from "react-intersection-observer";

function ImageList({ initialData }: { initialData: ImageList<Image> }) {
  const { ref, inView } = useInView({
    threshold: 0.1, // 10%가 보였을 때 트리거
  });

  const getKey = (
    pageIndex: number,
    previousPageData: ImageList<Image> | null,
  ) => {
    if (previousPageData && !previousPageData.content.length) return null;
    return `${API_ROUTES.EXAMPLE_IMAGE_LIST}?page=${pageIndex + 1}&limit=10`;
  };

  const { data, size, setSize, isLoading } = useSWRInfinite(
    getKey,
    (url) =>
      getExampleImages(Number(new URL(url).searchParams.get("page")), 10),
    {
      fallbackData: [initialData],
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 5000,
    },
  );

  const breakpoints = {
    default: 4,
    1024: 3,
    768: 2,
    540: 1,
  };

  // const images = mockData.content;
  const images = data?.flatMap((page) => page.content) || [];
  const isEmpty = data?.[0]?.content?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.content?.length < 10);

  if (inView && !isReachingEnd && !isLoading) {
    setSize(size + 1);
  }

  return (
    <>
      <Masonry
        breakpointCols={breakpoints}
        className="flex justify-center gap-1 overflow-hidden rounded-t-lg md:pl-0 lg:px-0"
      >
        {images.map((img) => (
          <Card key={img.imgId} img={img.imageUrl} />
        ))}
      </Masonry>
      {!isReachingEnd && <div ref={ref} />}
    </>
  );
}

export default ImageList;
