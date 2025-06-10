"use client";

import ImageList from "@/components/image/list/image-list";
import PAGE_ROUTES from "@/constants/page-routes";
import useGetMyActivityPosts from "@/hooks/user/activity/use-get-my-activity-posts";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Media = dynamic(() => import("@/components/media/MediaModal"), {
  ssr: false,
});

function TabPost() {
  const { data, isLoading, fetchNextPage, hasNextPage } =
    useGetMyActivityPosts();
  const allImages = data?.pages.flatMap((page) => page.content) ?? [];

  return (
    <>
      <ImageList
        data={data}
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />
      <Suspense fallback={null}>
        <Media images={allImages} pageRoute={PAGE_ROUTES.MY_ACTIVITY_POST} />
      </Suspense>
    </>
  );
}

export default TabPost;
