"use client";

import useGetMyImageList from "@/hooks/user/use-get-my-image-list";
import ImageItem from "./image-item";
import ArrowIcon from "@/assets/icon/arrow_small.svg";

function ImageList() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    hasPreviousPage,
    fetchPreviousPage,
  } = useGetMyImageList(6);

  const images = data?.pages.flatMap((page) => page.content) ?? [];
  const paddedImages = Array.from({ length: 6 }, (_, i) => images[i]);

  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <ArrowIcon
        className={`${!hasPreviousPage && "text-coolGray-300"} rotate-180`}
        onClick={() => fetchPreviousPage}
      />
      {paddedImages.map((img, idx) => (
        <ImageItem key={idx} img={img?.url} />
      ))}
      <ArrowIcon
        className={`${!hasNextPage && "text-coolGray-300"}`}
        onClick={() => fetchNextPage}
      />
    </div>
  );
}

export default ImageList;
