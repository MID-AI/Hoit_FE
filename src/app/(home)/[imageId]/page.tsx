import HomeImageDetailContainer from "@/components/home/HomeImageDetailContainer";

async function ImageDetailPage({
  params,
}: {
  params: Promise<{
    imageId: string;
  }>;
}) {
  const { imageId } = await params;

  return <HomeImageDetailContainer imageId={Number(imageId)} />;
}

export default ImageDetailPage;
