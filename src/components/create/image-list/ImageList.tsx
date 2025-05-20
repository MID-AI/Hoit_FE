"use client";

import useGetMyImageList from "@/hooks/user/project/all/use-get-my-image-list";
import ImageItem from "./image-item";
import ArrowIcon from "@/assets/icon/arrow_small.svg";
import { useAtom } from "jotai";
import { createImageAtom } from "@/stores/create-image-atom";
import { useEffect, useState } from "react";

function ImageList() {
  const [state, setState] = useAtom(createImageAtom);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    hasPreviousPage,
    fetchPreviousPage,
  } = useGetMyImageList(6);

  const currentPage = data?.pages[currentPageIndex];
  const images = currentPage?.content ?? [];

  const handleClick = (img: any) => {
    if (img?.url) {
      setState((prev) => ({
        ...prev,
        createdImages: [img.url],
        currentImage: img.url,
        prompt: img.prompt,
        ratio: img.ratio,
      }));
    }
  };

  const handlePrevious = async () => {
    if (!hasPreviousPage) return;
    const result = await fetchPreviousPage();
    if (result.isSuccess) {
      setCurrentPageIndex((prev) => prev - 1);
    }
  };

  const handleNext = async () => {
    if (!hasNextPage) return;
    const result = await fetchNextPage();
    if (result.isSuccess) {
      setCurrentPageIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (data && currentPageIndex > (data?.pages.length ?? 0) - 1) {
      setCurrentPageIndex(data?.pages.length - 1);
    }
  }, [data?.pages.length, currentPageIndex, data]);

  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <ArrowIcon
        className={`${!hasPreviousPage ? "cursor-not-allowed text-coolGray-300" : ""} rotate-180`}
        onClick={handlePrevious}
      />
      {images.map((img, idx) => (
        <ImageItem
          key={img?.id ?? idx}
          img={img?.url}
          createAt={img?.createdAt}
          onClick={() => img && handleClick(img)}
          isClicked={img?.url === (state?.createdImages?.[0] ?? "")}
        />
      ))}
      <ArrowIcon
        className={`${!hasNextPage && "text-coolGray-300"}`}
        onClick={handleNext}
      />
    </div>
  );
}

export default ImageList;
