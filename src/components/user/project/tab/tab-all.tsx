"use client";

import ImageList from "@/components/image/list/image-list";
import useGetMyImageList from "@/hooks/user/use-get-my-image-list";

function TabAll() {
  const { data, isLoading, fetchNextPage, hasNextPage } = useGetMyImageList();

  return (
    <ImageList
      data={data}
      isLoading={isLoading}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
    />
  );
}

export default TabAll;
