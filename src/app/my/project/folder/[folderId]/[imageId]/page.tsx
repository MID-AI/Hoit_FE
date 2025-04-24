import FolderImageDetailContainer from "@/components/user/project/folder-images/detail/folder-image-detail-container";
import React from "react";

async function FolderImageDetailPage({
  isModal = false,
  params,
}: {
  isModal?: boolean;
  params: { folderId: string; imageId: string };
}) {
  const { folderId, imageId } = await params;
  return (
    <div>
      <FolderImageDetailContainer
        isModal={isModal}
        imageId={Number(imageId)}
        folderId={Number(folderId)}
      />
    </div>
  );
}

export default FolderImageDetailPage;
