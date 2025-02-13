import StyleTag from "@/components/common/tag/style-tag";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TAGS } from "@/constants/tags";

function TagCarousel() {
  return (
    <div className="relative flex w-full justify-start gap-5 py-5">
      <span className="flex w-fit shrink-0 items-center justify-center rounded-3xl bg-white px-7 py-1.5">
        전체
      </span>
      <Carousel
        opts={{
          align: "start",
          loop: false,
          skipSnaps: false,
          containScroll: "trimSnaps",
          dragFree: true,
        }}
        className="w-full overflow-hidden"
      >
        <div className="w-full">
          <CarouselContent className="">
            {Object.values(TAGS).map((styleTag, index) => (
              <CarouselItem key={index} className="basis-auto">
                <StyleTag name={styleTag.name} img={styleTag.img} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default TagCarousel;
