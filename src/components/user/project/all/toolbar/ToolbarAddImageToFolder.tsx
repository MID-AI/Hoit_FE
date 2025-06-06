"use client";

import React, { useState } from "react";
import ToolbarEditButton from "../../toolbar/ToolbarEditButton";
import useAddImageToFolder from "@/hooks/user/project/all/useAddImageToFolder";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ModalButtons from "@/components/common/modal/ModalButtons";
import ToolbarFolderList from "./ToolbarFolderList";

function ToolbarAddImageToFolder({
  selectedCards,
}: {
  selectedCards: Set<number>;
}) {
  const [folderId, setFolderId] = useState<number | null>(null);
  const addImageMutation = useAddImageToFolder();

  const handleClick = () => {
    if (!folderId) return;
    if (selectedCards.size === 0) {
      document.getElementById("closeModal")?.click();
      alert("이미지를 선택해 주세요");
      return;
    }
    const imageIds = Array.from(selectedCards);
    addImageMutation.mutate({ folderId, imageIds });
    document.getElementById("closeModal")?.click();
  };

  /**
   * 수정 작업
   * 아이콘 수정필요
   */

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) setFolderId(null);
      }}
    >
      <DialogTrigger asChild>
        <ToolbarEditButton icon={<p>+</p>} text="폴더에 추가" />
      </DialogTrigger>
      <DialogContent className="w-full">
        <DialogTitle className="mb-23 flex justify-center">
          폴더에 추가하기
        </DialogTitle>
        <DialogDescription className="sr-only">
          폴더를 선택해 주세요
        </DialogDescription>
        <ToolbarFolderList folderId={folderId} setFolderId={setFolderId} />
        <ModalButtons onConfirm={handleClick} />
      </DialogContent>
    </Dialog>
  );
}

export default ToolbarAddImageToFolder;
