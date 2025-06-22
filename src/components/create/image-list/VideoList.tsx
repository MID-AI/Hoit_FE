"use client";

import useGetMyImageList from "@/hooks/user/project/all/useGetMyImageList";
import {
  createVideoAtom,
  videoInformationAtom,
  videoPromptAtom,
} from "@/stores/create-video-atom";
import { useAtom, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import ArrowIcon from "@/assets/icon/arrow_small.svg";
import cn from "@/utils/cn";
import VideoItem from "./VideoItem";

function VideoList() {
  const [video, setVideo] = useAtom(createVideoAtom);
  const setVideoInfo = useSetAtom(videoInformationAtom);
  const setPrompt = useSetAtom(videoPromptAtom);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const { data, fetchNextPage, hasNextPage } = useGetMyImageList(6, "video");

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

  const handleClick = ({ url, prompt, isUpscaled, taskId }: any) => {
    setVideo(url);
    setPrompt(prompt);
    setVideoInfo({ isUpscaled, taskId });
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
    <div className="hidden flex-col items-center justify-center gap-12 lg:flex">
      <ArrowIcon
        className={cn(
          "rotate-180",
          currentPageIndex <= 0
            ? "cursor-not-allowed text-coolGray-300"
            : "cursor-pointer",
        )}
        onClick={handlePrevious}
      />
      {filledImages.map((src, idx) => (
        <VideoItem
          key={src.id ?? idx}
          video={src.url}
          onClick={() => src && handleClick(src)}
          createAt={src.createdAt}
          isClicked={src?.url === (video?.[0] ?? "")}
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

export default VideoList;
