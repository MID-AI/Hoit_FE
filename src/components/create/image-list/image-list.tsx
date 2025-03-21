import ImageItem from "./image-item";
import ArrowIcon from "@/assets/icon/arrow_small.svg";

function ImageList() {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <ArrowIcon className="rotate-180 text-coolGray-300" />
      <ImageItem img="https://picsum.photos/500/500" />
      <ImageItem img="https://picsum.photos/600/500" />
      <ImageItem img="https://picsum.photos/700/500" />
      <ImageItem />
      <ImageItem />
      <ImageItem />
      <ArrowIcon className="text-coolGray-300" />
    </div>
  );
}

export default ImageList;
