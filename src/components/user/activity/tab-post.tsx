"use client";

import ImageList from "@/components/image/list/image-list";
import useGetMyActivityPosts from "@/hooks/user/activity/use-get-my-activity-posts";

function TabPost() {
  const { data, isLoading, fetchNextPage, hasNextPage } =
    useGetMyActivityPosts();

  return (
    <ImageList
      data={data}
      isLoading={isLoading}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
    />
  );
}

export default TabPost;
