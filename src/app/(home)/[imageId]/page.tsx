async function ImageDetailPage({
  params,
}: {
  params: Promise<{
    imageId: string;
  }>;
}) {
  const { imageId } = await params;

  return <div>수정 중 {imageId}</div>;
}

export default ImageDetailPage;
