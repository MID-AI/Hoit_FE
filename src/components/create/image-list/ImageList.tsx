"use client";

import ImageItem from "./image-item";
import ArrowIcon from "@/assets/icon/arrow_small.svg";
import { useAtom, useSetAtom } from "jotai";
import {
  createImageAtom,
  imageInformationAtom,
  imagePromptAtom,
  imageRatioAtom,
} from "@/stores/create-image-atom";
import { useEffect, useState } from "react";
import cn from "@/utils/cn";
import useGetMyImageList from "@/hooks/user/project/all/useGetMyImageList";

function ImageList() {
  const [image, setImage] = useAtom(createImageAtom);
  const setImageInfo = useSetAtom(imageInformationAtom);
  const setPrompt = useSetAtom(imagePromptAtom);
  const setRatio = useSetAtom(imageRatioAtom);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const { data, fetchNextPage, hasNextPage } = useGetMyImageList(6);
  const totalPage = data?.pages.length ?? 0;
  const currentPage = data?.pages[currentPageIndex];
  const images = currentPage?.content ?? [];
  const filledImages = [
    ...images,
    ...Array.from({ length: 6 - images.length }).map((_, i) => ({
      id: `placeholder-${i}`,
      url: null,
      createdAt: null,
    })),
  ];

  const handleClick = ({
    url,
    prompt,
    ratio,
    isUpscaled,
    taskId,
    index,
  }: any) => {
    setImage([url]);
    setPrompt(prompt);
    setRatio(ratio);
    setImageInfo({ isUpscaled, taskId, imageIndex: index });
  };

  const handlePrevious = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex((prev) => prev - 1);
    }
  };

  const handleNext = async () => {
    const isLastKnownPage = currentPageIndex + 1 >= totalPage;
    if (!hasNextPage && isLastKnownPage) return;

    if (!isLastKnownPage) {
      setCurrentPageIndex((prev) => prev + 1);
    } else {
      const result = await fetchNextPage();
      if (result.isSuccess) {
        setCurrentPageIndex((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    if (currentPageIndex >= totalPage) {
      setCurrentPageIndex(Math.max(totalPage - 1, 0));
    }
  }, [totalPage, currentPageIndex]);

  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <ArrowIcon
        className={cn(
          "rotate-180",
          currentPageIndex <= 0
            ? "cursor-not-allowed text-coolGray-300"
            : "cursor-pointer",
        )}
        onClick={handlePrevious}
      />
      {filledImages.map((img, idx) => (
        <ImageItem
          key={img.id ?? idx}
          img={img.url}
          createAt={img.createdAt}
          onClick={() => img && handleClick(img)}
          isClicked={img?.url === (image?.[0] ?? "")}
        />
      ))}
      <ArrowIcon
        className={`${
          currentPageIndex >= totalPage - 1 && !hasNextPage
            ? "text-coolGray-300"
            : "cursor-pointer"
        }`}
        onClick={handleNext}
      />
    </div>
  );
}

export default ImageList;
