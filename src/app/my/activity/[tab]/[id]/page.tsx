import LikeImageDetailContainer from "@/components/user/activity/detail/like-image-detail-container";
import PostImageDetailContainer from "@/components/user/activity/detail/post-image-detail-container";
import { notFound } from "next/navigation";

async function ActivityImagePage({
  isModal = false,
  params,
}: {
  isModal?: boolean;
  params: Promise<{
    tab: string;
    id: string;
  }>;
}) {
  const { tab, id } = await params;

  if (!["post", "like"].includes(tab)) {
    return notFound();
  }

  const tabContent = {
    post: <PostImageDetailContainer isModal={isModal} imageId={Number(id)} />,
    like: <LikeImageDetailContainer isModal={isModal} imageId={Number(id)} />,
  }[tab];

  return <main>{tabContent}</main>;
}

export default ActivityImagePage;
