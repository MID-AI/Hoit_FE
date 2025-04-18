"use client";

import ArrowIcon from "@/assets/my/arrow_header.svg";
import { useRouter } from "next/navigation";
import SelectionToolbar from "./selection-toolbar";

function FolderHeader({ folderName }: { folderName: string }) {
  const router = useRouter();

  return (
    <div className="mb-39 flex w-full items-center justify-between">
      <button
        onClick={() => router.back()}
        className="mt-64 flex items-center gap-13"
      >
        <ArrowIcon />
        <header className="text-Type-28-bold">{folderName}</header>
      </button>
      <SelectionToolbar />
    </div>
  );
}

export default FolderHeader;
