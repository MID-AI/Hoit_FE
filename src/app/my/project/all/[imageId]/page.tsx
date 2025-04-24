import TabAllImageDetailContainer from "@/components/user/project/tab/tab-all-image-detail-container";
import React from "react";

async function TabAllImageDetailPage({
  isModal = false,
  params,
}: {
  isModal?: boolean;
  params: { folderId: string; imageId: string };
}) {
  const { folderId, imageId } = await params;
  return (
    <main>
      <TabAllImageDetailContainer
        isModal={isModal}
        imageId={Number(imageId)}
        folderId={Number(folderId)}
      />
    </main>
  );
}

export default TabAllImageDetailPage;
