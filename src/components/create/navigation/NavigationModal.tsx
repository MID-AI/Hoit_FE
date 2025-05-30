"use client";

import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import SiteIcon from "@/assets/create/global.svg";
import { modalTabVariant } from "@/style/button";
import NavigationImageListContainer from "./NavigationImageListContainer";
import ModalButtons from "@/components/common/modal/ModalButtons";
import ImageToPC from "./ImageToPC";
import { useState } from "react";

function NavigationModal({
  type,
  setFile,
  setUrl,
}: {
  type: string;
  setFile: (file: File | null) => void;
  setUrl: (url: string | null) => void;
}) {
  const [selectImage, setSelectImage] = useState<string | null>(null);

  const handleConfirm = () => {
    if (selectImage) {
      setUrl(selectImage);
      setSelectImage(null);
    }
    document.getElementById("closeModal")?.click();
  };

  return (
    <DialogContent className="flex max-h-616 w-1236 flex-col items-center gap-40 px-38 pb-44 pt-26 text-coolGray-800">
      <DialogTitle>레퍼런스 업로드</DialogTitle>
      <DialogDescription className="sr-only">
        레퍼런스 이미지 업로드 방식을 선택해 주세요
      </DialogDescription>
      <div className="flex gap-36">
        <div className="flex w-full flex-col gap-12">
          <span className={modalTabVariant({ modalTab: "primary" })}>
            <SiteIcon />
            사이트에서
          </span>
          <ImageToPC type={type} setFile={setFile} />
        </div>

        <div>
          <NavigationImageListContainer
            onClick={(url: string) => setSelectImage(url)}
            selectedUrl={selectImage}
          />
          <ModalButtons onConfirm={handleConfirm} />
        </div>
      </div>
    </DialogContent>
  );
}

export default NavigationModal;
