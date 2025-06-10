"use client";

import ImageList from "@/components/image/list/image-list";
import MediaModal from "@/components/media/MediaModal";
import PAGE_ROUTES from "@/constants/page-routes";
import useMediaNavigation from "@/hooks/media/useMediaNavigation";
import useGetMyImagesLiked from "@/hooks/user/activity/use-get-my-images-liked";

function TabLikes() {
  const { data, isLoading, fetchNextPage, hasNextPage } = useGetMyImagesLiked();
  const allImages = data?.pages.flatMap((page) => page.content) ?? [];
  const { mediaId, showNext, showPrev, closeModal, hasNext, hasPrev } =
    useMediaNavigation(allImages, PAGE_ROUTES.MY_ACTIVITY_LIKE); // mediaId → 탐색 로직 처리

  return (
    <>
      <ImageList
        data={data}
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />
      {mediaId ? (
        <MediaModal
          mediaId={mediaId}
          images={allImages}
          onClose={closeModal}
          onNext={hasNext ? showNext : undefined}
          onPrev={hasPrev ? showPrev : undefined}
        />
      ) : null}
    </>
  );
}

export default TabLikes;
