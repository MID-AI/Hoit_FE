import HomeImageDetailContainer from "@/components/home/home-image-detail-container";

async function ImageDetailPage({
  isModal = false,
  params,
}: {
  isModal?: boolean;
  params: Promise<{
    imageId: string;
  }>;
}) {
  const { imageId } = await params;

  return (
    <HomeImageDetailContainer isModal={isModal} imageId={Number(imageId)} />
  );
}

export default ImageDetailPage;
