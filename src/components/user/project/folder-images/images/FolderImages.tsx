"use client";

import { useEffect } from "react";
import { useAtom, useAtomValue } from "jotai";
import Masonry from "react-masonry-css";
import { useInView } from "react-intersection-observer";
import {
  editModeFolderAtom,
  selectedFolderCardsAtom,
} from "@/stores/project-atom";
import EditImageWrapper from "../../edit/EditImageWrapper";
import { IMAGE_LIST_BREAKPOINTS } from "@/constants/image-list-breakpoints";
import NoItems from "@/components/common/card/NoItems";
import FolderHeader from "../FolderHeader";
import useGetFolderImages from "@/hooks/user/project/folder/useGetFolderImages";
import useMediaNavigation from "@/hooks/media/useMediaNavigation";
import PAGE_ROUTES from "@/constants/page-routes";
import MediaModal from "@/components/media/MediaModal";
import { useRouter } from "next/navigation";
import ImageCard from "@/components/common/card/ImageCard";

function FolderImages({ folderId }: { folderId: number }) {
  const router = useRouter();
  const { data, isLoading, fetchNextPage, hasNextPage } =
    useGetFolderImages(folderId);

  const [selectedCards, setSelectedCards] = useAtom(selectedFolderCardsAtom);
  const editMode = useAtomValue(editModeFolderAtom);
  const { ref, inView } = useInView();

  const allImages = data?.pages.flatMap((page) => page.images.content) ?? [];
  const isAllEmpty = (data?.pages?.[0]?.images.content.length ?? 0) === 0;
  const folderTitle = data?.pages?.[0]?.name || "";

  const { mediaId, showNext, showPrev, closeModal, hasNext, hasPrev } =
    useMediaNavigation(
      allImages,
      PAGE_ROUTES.MY_PROJECT_FOLDER_IMAGE(folderId),
    );

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const toggleSelect = (id: number) => {
    setSelectedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleImageClick = (id: number) => {
    if (!editMode) {
      router.push(`?mediaView=${id}`, { scroll: false });
    } else {
      toggleSelect(id);
    }
  };

  if (isLoading) return <div className="w-full">로딩중</div>;

  return (
    <>
      <FolderHeader folderName={folderTitle} isEmpty={isAllEmpty} />
      {isAllEmpty ? (
        <NoItems text="이미지와 영상을 폴더에 추가해보세요!" />
      ) : (
        <section>
          <Masonry
            breakpointCols={IMAGE_LIST_BREAKPOINTS}
            className="flex justify-start gap-20 md:pl-0 lg:px-0"
          >
            {allImages.map((img) => {
              const isChecked = selectedCards.has(img.id);
              return (
                <EditImageWrapper
                  key={img.id}
                  editMode={editMode}
                  isChecked={isChecked}
                  onClick={() => handleImageClick(img.id)}
                >
                  <ImageCard
                    id={img.id}
                    url={img.url}
                    nickname={img.nickname}
                    likeCount={img.likeCount}
                    isLiked={img?.isLiked}
                    className="rounded-0 mb-0 overflow-visible"
                  />
                </EditImageWrapper>
              );
            })}
          </Masonry>

          {hasNextPage ? (
            <div ref={ref} className="mt-8 text-center text-gray-400">
              다음 페이지 불러오는 중...
            </div>
          ) : (
            <div className="sr-only mt-8 text-center text-gray-400">
              마지막 페이지입니다.
            </div>
          )}
        </section>
      )}
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

export default FolderImages;
