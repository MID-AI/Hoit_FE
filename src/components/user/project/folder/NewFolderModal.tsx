"use client";

import useCreateFolder from "@/hooks/user/project/folder/use-create-folder";
import { useState } from "react";
import FolderNameInputDialogContent from "./FolderNameInputDialogContent";

function NewFolderModal() {
  const [folderName, setFolderName] = useState("");
  const createFolderMutation = useCreateFolder();
  const maxLength = 22;

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (target.value.length > maxLength) {
      target.value = target.value.slice(0, maxLength);
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
      maxLength={maxLength}
      folderName={folderName}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default NewFolderModal;
