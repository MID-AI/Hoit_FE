"use client";

import ImageList from "@/components/image/list/image-list";
import PAGE_ROUTES from "@/constants/page-routes";
import useGetMyImagesLiked from "@/hooks/user/activity/use-get-my-images-liked";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Media = dynamic(() => import("@/components/media/MediaModal"), {
  ssr: false,
});

function TabLikes() {
  const { data, isLoading, fetchNextPage, hasNextPage } = useGetMyImagesLiked();
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
        <Media images={allImages} pageRoute={PAGE_ROUTES.MY_ACTIVITY_LIKE} />
      </Suspense>
    </>
  );
}

export default TabLikes;
