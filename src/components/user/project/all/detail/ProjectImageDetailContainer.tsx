import MediaWrapper from "@/components/media/MediaWrapper";
import { QUERY_KEY } from "@/constants/query-key";
import useGetMyImageList from "@/hooks/user/project/all/useGetMyImageList";

function ProjectImageDetailContainer({ imageId }: { imageId: number }) {
  const { data: cachedList } = useGetMyImageList();
  const allImages = cachedList?.pages.flatMap((page) => page.content) ?? [];
  const currentIndex = allImages.findIndex((image) => image.id === imageId);
  const prevId = allImages[currentIndex - 1]?.id;
  const nextId = allImages[currentIndex + 1]?.id;

  const currentImage = allImages[currentIndex];

  if (!currentImage) return <div>이미지를 찾을 수 없습니다</div>;

  return (
    <MediaWrapper
      image={currentImage}
      context={QUERY_KEY.MY.PROJECT()}
      prevId={prevId}
      nextId={nextId}
    />
  );
}

export default ProjectImageDetailContainer;
