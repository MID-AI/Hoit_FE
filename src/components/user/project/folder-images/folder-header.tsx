"use client";

import ArrowIcon from "@/assets/my/arrow_header.svg";
import { useRouter } from "next/navigation";
import FolderImagesToolbar from "./toolbar/folder-images-toolbar";

function FolderHeader({ folderName }: { folderName: string }) {
  const router = useRouter();

  return (
    <div className="mb-39 mt-30 flex w-full items-center justify-between">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-13"
      >
        <ArrowIcon />
        <header className="text-Type-28-bold">{folderName}</header>
      </button>
      <FolderImagesToolbar />
    </div>
  );
}

export default FolderHeader;
