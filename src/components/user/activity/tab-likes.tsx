"use client";

import ImageList from "@/components/image/list/image-list";
import useGetMyImagesLiked from "@/hooks/user/use-get-my-images-liked";

function TabLikes() {
  const { data, isLoading, fetchNextPage, hasNextPage } = useGetMyImagesLiked();

  return (
    <ImageList
      data={data}
      isLoading={isLoading}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
    />
  );
}

export default TabLikes;
