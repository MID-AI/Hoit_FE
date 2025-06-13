import TabLikes from "@/components/user/activity/TabLikes";
import TabPostContainer from "@/components/user/activity/tab/TabPostContainer";
import TabWrapper from "@/components/user/activity/tab/TabWrapper";
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
    <section className="w-full px-23 py-28">
      <TabWrapper activeTab={tab}>{tabContent}</TabWrapper>
    </section>
  );
}

export default ActivityTabPage;
