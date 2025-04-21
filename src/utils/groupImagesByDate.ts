import type { ImageType } from "@/@types/images";
import dayjs from "@/utils/dayjs";

export default function groupImagesByDate(images: ImageType[]) {
  return images.reduce<Record<string, ImageType[]>>((acc, image) => {
    const date = dayjs(image.createdAt).format("YY/MM/DD");
    if (!acc[date]) acc[date] = [];
    acc[date].push(image);
    return acc;
  }, {});
}
