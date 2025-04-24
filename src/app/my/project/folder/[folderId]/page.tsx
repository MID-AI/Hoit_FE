import FolderImagesContainer from "@/components/user/project/folder-images/folder-images-container";
import React from "react";

async function FolderImagesPage({ params }: { params: { folderId: string } }) {
  const { folderId } = await params;
  return (
    <main className="w-full px-24">
      <FolderImagesContainer folderId={Number(folderId)} />
    </main>
  );
}

export default FolderImagesPage;
