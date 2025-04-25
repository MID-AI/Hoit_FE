import LikeImageDetailContainer from "@/components/user/activity/detail/like-image-detail-container";
import PostImageDetailContainer from "@/components/user/activity/detail/post-image-detail-container";
import { notFound } from "next/navigation";

async function ActivityImagePage({
  params,
}: {
  params: Promise<{
    tab: string;
    imageId: string;
  }>;
}) {
  const { tab, imageId } = await params;

  if (!["post", "like"].includes(tab)) {
    return notFound();
  }

  const tabContent = {
    post: <PostImageDetailContainer imageId={Number(imageId)} />,
    like: <LikeImageDetailContainer imageId={Number(imageId)} />,
  }[tab];

  return <main>{tabContent}</main>;
}

export default ActivityImagePage;
