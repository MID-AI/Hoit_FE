"use client";

import { useEffect } from "react";
import { useAtom, useAtomValue } from "jotai";
import Masonry from "react-masonry-css";
import { useInView } from "react-intersection-observer";

import { editModeAtom, selectedCardsAtom } from "@/stores/edit-folder-atom";

import FolderImageListEdit from "../folder-image-list-edit";
import Card from "@/components/common/card/card";
import useGetFolderImages from "@/hooks/user/use-get-folder-images";
import { useParams } from "next/navigation";

function FolderImages() {
  const id = Number(useParams().id);
  const { data, isLoading, fetchNextPage, hasNextPage } =
    useGetFolderImages(id);
  const [selectedCards, setSelectedCards] = useAtom(selectedCardsAtom);
  const editMode = useAtomValue(editModeAtom);
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

  const breakpoints = {
    default: 4,
    1024: 3,
    768: 2,
    540: 1,
  };

  if (isLoading) {
    return (
      <div aria-label="이미지 목록 불러오는 중" className="w-full">
        로딩중
      </div>
    );
  }

  if (isAllEmpty) {
    return (
      <div className="py-10 text-center text-gray-500">이미지가 없습니다.</div>
    );
  }

  return (
    <>
      {isAllEmpty ? (
        <div className="py-10 text-center text-gray-500">
          이미지가 없습니다.
        </div>
      ) : (
        <>
          <Masonry
            breakpointCols={breakpoints}
            className="flex justify-start gap-20 md:pl-0 lg:px-0"
          >
            {data?.pages.map((page) =>
              page.content.map((img) => {
                const isChecked = selectedCards.has(img.id);
                return (
                  <FolderImageListEdit
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
                  </FolderImageListEdit>
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
      )}
    </>
  );
}

export default FolderImages;
