import TabLikes from "@/components/user/activity/tab-likes";
import TabPostContainer from "@/components/user/activity/tab/tab-post-container";
import TabWrapper from "@/components/user/activity/tab/tab-wrapper";
import { notFound } from "next/navigation";

async function ActivityTabPage({
  params,
}: {
  params: Promise<{ tab: string }>;
}) {
  const { tab } = await params;

  if (!["post", "like"].includes(tab)) {
    return notFound();
  }

  const tabContent = {
    post: <TabPostContainer />,
    like: <TabLikes />,
  }[tab];

  return (
    <main className="w-full px-23 py-28">
      <TabWrapper activeTab={tab}>{tabContent}</TabWrapper>
    </main>
  );
}

export default ActivityTabPage;
