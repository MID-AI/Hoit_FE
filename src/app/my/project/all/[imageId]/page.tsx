import TabAllImageDetailContainer from "@/components/user/project/tab/tab-all-image-detail-container";
import React from "react";

async function TabAllImageDetailPage({
  params,
}: {
  params: Promise<{ imageId: string }>;
}) {
  const { imageId } = await params;
  return (
    <main>
      <TabAllImageDetailContainer imageId={Number(imageId)} />
    </main>
  );
}

export default TabAllImageDetailPage;
