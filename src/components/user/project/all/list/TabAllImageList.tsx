"use client";

import {
  editModeAllTabAtom,
  selectedAllTabCardsAtom,
} from "@/stores/project-atom";
import { useAtom, useAtomValue } from "jotai";
import { useCallback } from "react";
import ImageDate from "./ImageDate";
import Masonry from "react-masonry-css";
import { IMAGE_LIST_BREAKPOINTS } from "@/constants/image-list-breakpoints";
import EditImageWrapper from "../../edit/EditImageWrapper";
import ImageCard from "@/components/common/card/ImageCard";
import { useRouter } from "next/navigation";

function TabAllImageList({ date, images }: { date: string; images: any[] }) {
  const router = useRouter();
  const editMode = useAtomValue(editModeAllTabAtom);
  const [selectedAllTabCards, setSelectedAllTabCards] = useAtom(
    selectedAllTabCardsAtom,
  );
  const allSelected = images.every((img) => selectedAllTabCards.has(img.id));

  const toggleAllForDate = useCallback(() => {
    setSelectedAllTabCards((prev) => {
      const newSet = new Set(prev);
      const ids = images.map((i) => i.id);
      const allSelected = ids.every((id) => newSet.has(id));
      ids.forEach((id) => (allSelected ? newSet.delete(id) : newSet.add(id)));
      return newSet;
    });
  }, [images, setSelectedAllTabCards]);

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

  const handleImageClick = (id: number) => {
    if (!editMode) {
      router.push(`?mediaView=${id}`, { scroll: false });
    } else {
      toggleSelect(id);
    }
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
              onClick={() => handleImageClick(img.id)}
            >
              <ImageCard
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
}

export default TabAllImageList;
