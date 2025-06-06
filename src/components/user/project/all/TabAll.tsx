"use client";

import { IMAGE_LIST_BREAKPOINTS } from "@/constants/image-list-breakpoints";
import {
  editModeAllTabAtom,
  isAllEmptyAtom,
  selectedAllTabCardsAtom,
} from "@/stores/project-atom";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useCallback, useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import Masonry from "react-masonry-css";
import EditImageWrapper from "../edit/EditImageWrapper";
import Card from "@/components/common/card/ImageCard";
import NoItems from "@/components/common/card/NoItems";
import groupImagesByDate from "@/utils/groupImagesByDate";
import ImageDate from "./list/ImageDate";
import useGetMyImageList from "@/hooks/user/project/all/useGetMyImageList";

function TabAll() {
  const { data, isLoading, fetchNextPage, hasNextPage } = useGetMyImageList();
  const [selectedAllTabCards, setSelectedAllTabCards] = useAtom(
    selectedAllTabCardsAtom,
  );
  const editMode = useAtomValue(editModeAllTabAtom);
  const setIsAllEmpty = useSetAtom(isAllEmptyAtom);
  const { ref, inView } = useInView();

  const isEmpty = data?.pages[0].content.length === 0;

  useEffect(() => {
    setIsAllEmpty(isEmpty);
  }, [isEmpty, setIsAllEmpty]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const toggleSelect = useCallback(
    (id: number) => {
      setSelectedAllTabCards((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(id)) {
          newSet.delete(id);
        } else {
          newSet.add(id);
        }
        return newSet;
      });
    },
    [setSelectedAllTabCards],
  );

  const grouped = useMemo(() => {
    const allImages = data?.pages.flatMap((page) => page.content) ?? [];
    return groupImagesByDate(allImages);
  }, [data]);

  if (isLoading) {
    return (
      <div aria-label="이미지 목록 불러오는 중" className="w-full">
        로딩중
      </div>
    );
  }

  if (isEmpty) {
    return <NoItems text="이미지와 영상을 생성해 보세요!" />;
  }

  return (
    <>
      {Object.entries(grouped).map(([date, images]) => {
        const allSelected = images.every((img) =>
          selectedAllTabCards.has(img.id),
        );

        const toggleAllForDate = () => {
          setSelectedAllTabCards((prev) => {
            const newSet = new Set(prev);
            const allIds = images.map((img) => img.id);
            const isAllSelected = allIds.every((id) => newSet.has(id));

            if (isAllSelected) {
              allIds.forEach((id) => newSet.delete(id));
            } else {
              allIds.forEach((id) => newSet.add(id));
            }

            return newSet;
          });
        };

        return (
          <section key={date} className="mb-16">
            <ImageDate
              date={date}
              editMode={editMode}
              allSelected={allSelected}
              toggleAllForDate={toggleAllForDate}
            />
            <Masonry
              breakpointCols={IMAGE_LIST_BREAKPOINTS}
              className="flex justify-start gap-20 md:pl-0 lg:px-0"
            >
              {images.map((img) => {
                const isChecked = selectedAllTabCards.has(img.id);
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
              })}
            </Masonry>
          </section>
        );
      })}

      {hasNextPage ? (
        <div ref={ref} className="mt-8 text-center text-gray-400">
          다음 페이지 불러오는 중...
        </div>
      ) : (
        <div className="sr-only mt-8 text-center text-gray-400">
          마지막 페이지입니다.
        </div>
      )}
    </>
  );
}

export default TabAll;
