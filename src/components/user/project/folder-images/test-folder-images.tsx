"use client";

import Card from "@/components/common/card/ImageCard";
import MockData from "@/mocks/data/imageList.json";
import Masonry from "react-masonry-css";
import { useAtom, useAtomValue } from "jotai";
import {
  editModeFolderAtom,
  selectedFolderCardsAtom,
} from "@/stores/project-atom";
import EditImageWrapper from "../edit/EditImageWrapper";

function TestFolderImages() {
  const [selectedCards, setSelectedCards] = useAtom(selectedFolderCardsAtom);
  const editMode = useAtomValue(editModeFolderAtom);

  const breakpoints = {
    default: 4,
    1024: 3,
    768: 2,
    540: 1,
  };

  const toggleSelect = (id: number) => {
    setSelectedCards((prev) => {
      const newSet: Set<number> = new Set<number>(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <Masonry
      breakpointCols={breakpoints}
      className="flex justify-start gap-20 md:pl-0 lg:px-0"
    >
      {MockData?.content.map((img: any) => {
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
              likeCount={img.likes}
              isLiked={img?.isLike}
              className="rounded-0 mb-0 overflow-visible"
            />
          </EditImageWrapper>
        );
      })}
    </Masonry>
  );
}

export default TestFolderImages;
