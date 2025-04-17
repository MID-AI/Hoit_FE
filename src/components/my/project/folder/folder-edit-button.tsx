"use client";

import { PopoverContent } from "@/components/ui/popover";
import FolderEditItem from "./folder-edit-item";
import PenIcon from "@/assets/my/pen.svg";
import TrashCanIcon from "@/assets/my/trash_can.svg";
import FolderEditNameChange from "./folder-edit-name-change";
import { useState } from "react";
import FolderDelete from "./folder-delete";

function FolderEditButton({
  folderId,
  folderName,
}: {
  folderId: number;
  folderName: string;
}) {
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);

  return (
    <>
      <PopoverContent
        sideOffset={10}
        side="top"
        className="flex h-68 w-119 translate-x-[-50px] flex-col items-start justify-center gap-10 rounded-10 bg-white px-4 py-5"
      >
        <FolderEditItem
          title="이름 수정하기"
          icon={<PenIcon />}
          onClick={() => setEditOpen(true)}
        />

        <FolderEditItem
          title="삭제하기"
          icon={<TrashCanIcon />}
          onClick={() => setDeleteOpen(true)}
        />
      </PopoverContent>
      {editOpen && (
        <FolderEditNameChange
          folderId={folderId}
          folderName={folderName}
          editOpen={editOpen}
          setEditOpen={setEditOpen}
        />
      )}
      {deleteOpen && (
        <FolderDelete
          folderId={folderId}
          deleteOpen={deleteOpen}
          setDeleteOpen={setDeleteOpen}
        />
      )}
    </>
  );
}

export default FolderEditButton;
