import HomeImageDetailContainer from "@/components/home/home-image-detail-container";

async function ImageDetailPage({
  isModal = false,
  searchParams,
}: {
  isModal?: boolean;
  searchParams: Promise<{
    imageId: string;
  }>;
}) {
  const { imageId } = await searchParams;

  return (
    <HomeImageDetailContainer isModal={isModal} imageId={Number(imageId)} />
  );
}

export default ImageDetailPage;
