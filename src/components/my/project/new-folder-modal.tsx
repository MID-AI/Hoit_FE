"use client";

import { createFolder } from "@/apis/services/project";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { QUERY_KEY } from "@/constants/query-key";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

function NewFolderModal() {
  const [folderName, setFolderName] = useState("");
  const queryClient = useQueryClient();
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

    try {
      await createFolder(folderName);
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.MY.PROJECT_FOLDER,
      });
      setFolderName("");
      const closeBtn = document.getElementById(
        "closeModal",
      ) as HTMLButtonElement;
      closeBtn?.click();
    } catch (error) {
      console.error("폴더 생성 실패", error);
    }
  };

  return (
    <DialogContent className="flex h-435 w-847 flex-col items-center justify-center px-38 pb-44 pt-32">
      <DialogTitle className="mb-78">새로운 폴더 만들기</DialogTitle>
      <DialogDescription className="w-full">
        <span className="relative">
          <Input
            placeholder="폴더 이름을 입력하세요"
            className="mb-87 rounded-22 border-2 border-cBlue-400 px-28 py-22 placeholder:text-coolGray-300"
            maxLength={maxLength}
            onInput={handleInputChange}
          />
          <span className="absolute right-0 top-0 pr-34 pt-24 text-Type-20-bold text-coolGray-500">
            {folderName.length}/{maxLength}
          </span>
        </span>

        <span className="flex items-center justify-end gap-28">
          <DialogClose id="closeModal" asChild>
            <Button variant="secondary">취소</Button>
          </DialogClose>
          <Button onClick={handleSubmit}>확인</Button>
        </span>
      </DialogDescription>
    </DialogContent>
  );
}

export default NewFolderModal;
