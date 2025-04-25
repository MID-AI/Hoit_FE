import TabAllImageDetailContainer from "@/components/user/project/tab/tab-all-image-detail-container";
import React from "react";

async function TabAllImageDetailPage({
  isModal = false,
  params,
}: {
  isModal?: boolean;
  params: { imageId: string };
}) {
  const { imageId } = await params;
  return (
    <main>
      <TabAllImageDetailContainer isModal={isModal} imageId={Number(imageId)} />
    </main>
  );
}

export default TabAllImageDetailPage;
