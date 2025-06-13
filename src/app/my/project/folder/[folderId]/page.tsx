import FolderImagesContainer from "@/components/user/project/folder-images/FolderImagesContainer";
import React from "react";

async function FolderImagesPage({
  params,
}: {
  params: Promise<{ folderId: string }>;
}) {
  const { folderId } = await params;
  return (
    <section className="w-full px-24">
      <FolderImagesContainer folderId={Number(folderId)} />
    </section>
  );
}

export default FolderImagesPage;
