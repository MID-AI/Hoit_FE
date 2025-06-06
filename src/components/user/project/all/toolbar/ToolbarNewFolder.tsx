"use client";

import FolderNameInput from "@/components/common/input/FolderNameInput";
import { FOLDER_NAME_MAX_LENGTH } from "@/constants/input-limits";
import useCreateFolder from "@/hooks/user/project/folder/useCreateFolder";
import React, { useState } from "react";

function ToolbarNewFolder() {
  const [folderName, setFolderName] = useState<string>("");
  const createFolderMutation = useCreateFolder();

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (target.value.length > FOLDER_NAME_MAX_LENGTH) {
      target.value = target.value.slice(0, FOLDER_NAME_MAX_LENGTH);
    }
    setFolderName(target.value);
  };

  const handleEnter = () => {
    if (!folderName.trim()) return;
    createFolderMutation.mutate(folderName.trim());
    setFolderName("");
  };

  return (
    <FolderNameInput
      folderName={folderName}
      handleInputChange={handleInputChange}
      handleEnter={handleEnter}
    />
  );
}

export default ToolbarNewFolder;
