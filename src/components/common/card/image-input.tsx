"use client";

import Image from "next/image";
import RefImageIcon from "@/assets/create/ref_image.svg";
import DeleteButtonIcon from "@/assets/create/delete_button.svg";
import cn from "@/utils/cn";
import { Dialog } from "@/components/ui/dialog";
import NavigationModal from "@/components/create/navigation/navigation-modal";
import { useState } from "react";

interface Props {
  type: string;
  image: File | null;
  disabled: boolean;
  setFile: (file: File | null) => void;
  setUrl: (url: string | null) => void;
}

function ImageInput({ type, image, disabled, setFile, setUrl }: Props) {
  const [open, setOpen] = useState(false);
  const onClickDelete = () => {
    setFile(null);
    setUrl(null);
  };

  return (
    <>
      <div
        className={cn(
          "group flex h-148 w-full shrink-0 cursor-pointer items-center justify-center gap-12 rounded-20 border border-coolGray-100 bg-coolGray-100 p-12",
          image || disabled
            ? "cursor-default"
            : "cursor-pointer hover:border-coolGray-500 hover:bg-coolGray-300",
        )}
        onClick={() => {
          if (!image && !disabled) setOpen(true);
        }}
      >
        <span
          className={cn(
            "relative flex h-full w-full items-center justify-center overflow-hidden rounded-11 p-12",
            !image && "border-2 border-dashed border-coolGray-400",
            !image && !disabled && "group-hover:border-coolGray-500",
          )}
        >
          {image ? (
            <>
              <Image
                src={URL.createObjectURL(image)}
                alt={`${type} 미리보기 이미지`}
                fill
                className="object-cover"
              />
              <button
                className="absolute right-8 top-8 cursor-pointer"
                onClick={onClickDelete}
                disabled={disabled}
              >
                <DeleteButtonIcon />
              </button>
            </>
          ) : (
            <>
              <RefImageIcon width={24} height={24} className="shrink-0" />
              <span className="ml-8 shrink-0 text-Type-12-regular">
                클릭해서 레퍼런스 추가하세요
              </span>
            </>
          )}
        </span>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <NavigationModal type={type} setFile={setFile} setUrl={setUrl} />
      </Dialog>
    </>
  );
}

export default ImageInput;
