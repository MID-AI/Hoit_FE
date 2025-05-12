"use client";

import useGetMyImageList from "@/hooks/user/project/all/use-get-my-image-list";
import ImageItem from "./image-item";
import ArrowIcon from "@/assets/icon/arrow_small.svg";
import { useAtom } from "jotai";
import { createImageAtom } from "@/stores/create-image-atom";

function ImageList() {
  const [state, setState] = useAtom(createImageAtom);

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
      setState((prev) => ({
        ...prev,
        createdImages: [img.url],
        currentImage: img.url,
        prompt: img.prompt,
        ratio: img.ratio,
      }));
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
          isClicked={img?.url === state.currentImage}
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
