import { getExampleImages } from "@/apis/service";
import ImageList from "./image-list";

async function ImageListFetcher() {
  const initialData = await getExampleImages(1, 10);

  return (
    <div>
      <div>test</div>
      <ImageList initialData={initialData} />
    </div>
  );
}

export default ImageListFetcher;
