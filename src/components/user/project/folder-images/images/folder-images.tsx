"use client";

import { useEffect } from "react";
import { useAtom, useAtomValue } from "jotai";
import Masonry from "react-masonry-css";
import { useInView } from "react-intersection-observer";
import {
  editModeFolderAtom,
  selectedFolderCardsAtom,
} from "@/stores/project-atom";
import Card from "@/components/common/card/card";
import useGetFolderImages from "@/hooks/user/use-get-folder-images";
import { useParams } from "next/navigation";
import EditImageWrapper from "../../edit/edit-image-wrapper";
import { IMAGE_LIST_BREAKPOINTS } from "@/constants/image-list-breakpoints";
import NoItems from "@/components/common/card/no-items";

function FolderImages() {
  const id = Number(useParams().id);
  const { data, isLoading, fetchNextPage, hasNextPage } =
    useGetFolderImages(id);
  const [selectedCards, setSelectedCards] = useAtom(selectedFolderCardsAtom);
  const editMode = useAtomValue(editModeFolderAtom);
  const { ref, inView } = useInView();

  const isAllEmpty = data?.pages?.[0]?.empty ?? false;

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

  if (isLoading) {
    return (
      <div aria-label="이미지 목록 불러오는 중" className="w-full">
        로딩중
      </div>
    );
  }

  if (isAllEmpty) {
    return <NoItems text="이미지와 영상을 생성해 보세요!" />;
  }

  return (
    <>
      <Masonry
        breakpointCols={IMAGE_LIST_BREAKPOINTS}
        className="flex justify-start gap-20 md:pl-0 lg:px-0"
      >
        {data?.pages.map((page) =>
          page.content.map((img) => {
            const isChecked = selectedCards.has(img.id);
            return (
              <EditImageWrapper
                key={img.id}
                editMode={editMode}
                isChecked={isChecked}
                onClick={() => toggleSelect(img.id)}
              >
                <Card
                  id={img.id}
                  url={img.url}
                  nickname={img.nickname}
                  likeCount={img.likeCount}
                  isLiked={img?.isLiked}
                  className="rounded-0 mb-0 overflow-visible"
                />
              </EditImageWrapper>
            );
          }),
        )}
      </Masonry>

      {hasNextPage ? (
        <div ref={ref} className="mt-8 text-center text-gray-400">
          다음 페이지 불러오는 중...
        </div>
      ) : (
        <div className="mt-8 text-center text-gray-400">
          마지막 페이지입니다.
        </div>
      )}
    </>
  );
}

export default FolderImages;
