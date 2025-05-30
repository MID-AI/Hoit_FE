"use client";

import useGetImageList from "@/hooks/home/use-get-image-list";
import ImageList from "../image/list/image-list";

function ImageListContainer() {
  const { data, isLoading, fetchNextPage, hasNextPage } = useGetImageList();

  return (
    <ImageList
      data={data}
      isLoading={isLoading}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
    />
  );
}

export default ImageListContainer;
