import FolderImageDetailContainer from "@/components/user/project/folder-images/detail/folder-image-detail-container";
import React from "react";

async function FolderImageDetailPage({
  params,
}: {
  params: Promise<{ folderId: string; imageId: string }>;
}) {
  const { folderId, imageId } = await params;
  return (
    <div>
      <FolderImageDetailContainer
        imageId={Number(imageId)}
        folderId={Number(folderId)}
      />
    </div>
  );
}

export default FolderImageDetailPage;
