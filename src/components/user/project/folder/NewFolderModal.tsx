"use client";

import { useState } from "react";
import FolderNameInputDialogContent from "./FolderNameInputDialogContent";
import useCreateFolder from "@/hooks/user/project/folder/useCreateFolder";
import { FOLDER_NAME_MAX_LENGTH } from "@/constants/input-limits";

function NewFolderModal() {
  const [folderName, setFolderName] = useState("");
  const createFolderMutation = useCreateFolder();

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (target.value.length > FOLDER_NAME_MAX_LENGTH) {
      target.value = target.value.slice(0, FOLDER_NAME_MAX_LENGTH);
    }
    setFolderName(target.value);
  };

  const handleSubmit = async () => {
    if (!folderName.trim()) {
      alert("폴더 이름을 입력해주세요.");
      return;
    }

    createFolderMutation.mutate(folderName);
    setFolderName("");
    const closeBtn = document.getElementById("closeModal") as HTMLButtonElement;
    closeBtn?.click();
  };

  return (
    <FolderNameInputDialogContent
      modalTitle="새로운 폴더 만들기"
      folderName={folderName}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default NewFolderModal;
