import HomeImageDetailContainer from "@/components/home/home-image-detail-container";

function ImageDetailPage({
  isModal = false,
  params,
}: {
  isModal?: boolean;
  params: {
    imageId: string;
  };
}) {
  const { imageId } = params;

  return (
    <HomeImageDetailContainer isModal={isModal} imageId={Number(imageId)} />
  );
}

export default ImageDetailPage;
