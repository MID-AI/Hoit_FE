"use client";

import useGetMyImageList from "@/hooks/user/use-get-my-image-list";
import ImageItem from "./image-item";
import ArrowIcon from "@/assets/icon/arrow_small.svg";
import { useSetAtom } from "jotai";
import {
  currentImageAtom,
  promptAtom,
  selectedRatioAtom,
} from "@/stores/create-image-atom";

function ImageList() {
  const setCurrentImage = useSetAtom(currentImageAtom);
  const setPrompt = useSetAtom(promptAtom);
  const setRatio = useSetAtom(selectedRatioAtom);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    hasPreviousPage,
    fetchPreviousPage,
  } = useGetMyImageList(6);

  const images = data?.pages.flatMap((page) => page.content) ?? [];
  const paddedImages = Array.from({ length: 6 }, (_, i) => images[i]);

  const handleClick = (img: any) => {
    if (img?.url) {
      setCurrentImage(img.url);
      setPrompt(img.prompt);
      setRatio(img.ratio);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <ArrowIcon
        className={`${!hasPreviousPage && "text-coolGray-300"} rotate-180`}
        onClick={() => fetchPreviousPage()}
      />
      {paddedImages.map((img, idx) => (
        <ImageItem
          key={idx}
          img={img?.url}
          createAt={img?.createdAt}
          onClick={() => handleClick(img)}
        />
      ))}
      <ArrowIcon
        className={`${!hasNextPage && "text-coolGray-300"}`}
        onClick={() => fetchNextPage()}
      />
    </div>
  );
}

export default ImageList;
