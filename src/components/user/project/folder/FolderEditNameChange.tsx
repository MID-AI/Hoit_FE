"use client";

import { useState } from "react";
import FolderNameInputDialogContent from "./FolderNameInputDialogContent";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useQueryClient } from "@tanstack/react-query";
import useEditFolderName from "@/hooks/user/project/folder/useEditFolderName";
import { FOLDER_NAME_MAX_LENGTH } from "@/constants/input-limits";

interface Props {
  folderId: number;
  folderName: string;
  editOpen: boolean;
  setEditOpen: (open: boolean) => void;
}

function FolderEditNameChange({
  folderId,
  folderName,
  editOpen,
  setEditOpen,
}: Props) {
  const [newFolderName, setNewFolderName] = useState(folderName);
  const queryClient = useQueryClient();
  const editMutation = useEditFolderName();

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (target.value.length > FOLDER_NAME_MAX_LENGTH) {
      target.value = target.value.slice(0, FOLDER_NAME_MAX_LENGTH);
    }
    setNewFolderName(target.value);
  };

  const handleRenameData = (folderId: number, newName: string) => {
    queryClient.setQueryData(["myProject", "folderList"], (oldData: any) => {
      if (!oldData) return oldData;

      return {
        ...oldData,
        pages: oldData.pages.map((page: any) => ({
          ...page,
          content: page.content.map((folder: any) =>
            folder.id === folderId ? { ...folder, name: newName } : folder,
          ),
        })),
      };
    });
  };

  const handleSubmit = async () => {
    if (!newFolderName.trim()) {
      alert("폴더 이름을 입력해주세요.");
      return;
    }

    editMutation.mutate(
      { folderId, newFolderName },
      {
        onSuccess: () => {
          handleRenameData(folderId, newFolderName);
          setNewFolderName("");
          setEditOpen(false);
        },
      },
    );
  };

  return (
    <Dialog open={editOpen} onOpenChange={setEditOpen}>
      <DialogContent className="flex h-435 w-847 flex-col items-center justify-center px-38 pb-44 pt-32">
        <FolderNameInputDialogContent
          modalTitle="이름 수정하기"
          folderName={newFolderName}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  );
}

export default FolderEditNameChange;
