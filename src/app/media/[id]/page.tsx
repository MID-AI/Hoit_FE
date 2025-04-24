import HomeImageDetailContainer from "@/components/home/home-image-detail-container";

async function MediaPage({
  isModal = false,
  searchParams,
}: {
  isModal?: boolean;
  searchParams: Promise<{
    id: string;
  }>;
}) {
  const { id } = await searchParams;

  return <HomeImageDetailContainer isModal={isModal} imageId={Number(id)} />;
}

export default MediaPage;
