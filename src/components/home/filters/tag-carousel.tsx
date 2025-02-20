"use client";

import StyleTag from "@/components/common/tag/style-tag";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import { TAGS_MAIN } from "@/constants/tags";
import { selectedSubTagAtom, selectedTagAtom } from "@/stores/tags-atom";
import cn from "@/utils/cn";
import { useAtom, useSetAtom } from "jotai";

function TagCarousel() {
  const [selectedTag, setSelectedTag] = useAtom(selectedTagAtom);
  const setSubTag = useSetAtom(selectedSubTagAtom);
  return (
    <div className="relative z-10 flex h-auto w-full justify-start gap-5 overflow-visible py-20 pt-28">
      <Carousel
        opts={{
          align: "start",
          loop: false,
          skipSnaps: false,
          containScroll: "trimSnaps",
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="flex gap-20 text-Type-20-medium">
          <CarouselItem
            onClick={() => {
              setSelectedTag(0);
              setSubTag(null);
            }}
            className={cn(
              "flex basis-auto cursor-pointer items-center justify-center rounded-3xl bg-white px-19 py-8 shadow-tag",
              selectedTag === 0 && "border border-cBlue-300 bg-cBlue-100",
            )}
          >
            전체
          </CarouselItem>
          {Object.values(TAGS_MAIN).map((styleTag) => (
            <CarouselItem
              key={styleTag.id}
              onClick={() => {
                if (styleTag.id !== selectedTag) {
                  setSelectedTag(styleTag.id);
                  setSubTag(null);
                } else {
                  setSelectedTag(styleTag.id);
                }
              }}
              className="basis-auto"
            >
              <StyleTag
                name={styleTag.name}
                img={styleTag.img}
                isSelected={styleTag.id === selectedTag}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
    </div>
  );
}

export default TagCarousel;
