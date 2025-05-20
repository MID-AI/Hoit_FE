"use client";

import Image from "next/image";
import RefImageIcon from "@/assets/create/ref_image.svg";
import DeleteButtonIcon from "@/assets/create/delete_button.svg";
import cn from "@/utils/cn";
import { Dialog } from "@/components/ui/dialog";
import NavigationModal from "@/components/create/navigation/NavigationModal";
import { useState } from "react";

interface Props {
  type: "character" | "style";
  disabled: boolean;
  reference: {
    character: File | null;
    characterUrl: string | null;
    style: File | null;
    styleUrl: string | null;
  };
  setReference: (
    key: "character" | "style",
    value: File | string | null,
    type: "file" | "url",
  ) => void;
}

function ImageRefInput({ type, disabled, reference, setReference }: Props) {
  const [open, setOpen] = useState(false);
  const imageFile = reference[type];
  const imageUrl =
    type === "character" ? reference.characterUrl : reference.styleUrl;

  const onClickDelete = () => {
    setReference(type, null, "file");
    setReference(type, null, "url");
  };

  const handleSetFile = (file: File | null) => {
    setReference(type, file, "file");
  };

  const handleSetUrl = (url: string | null) => {
    setReference(type, url, "url");
  };

  return (
    <>
      <div
        className={cn(
          "group flex h-148 w-full shrink-0 cursor-pointer items-center justify-center gap-12 rounded-20 border border-coolGray-100 bg-coolGray-100 p-12",
          imageFile || imageUrl || disabled
            ? "cursor-default"
            : "cursor-pointer hover:border-coolGray-500 hover:bg-coolGray-300",
        )}
        onClick={() => {
          if (!imageFile && !imageUrl && !disabled) setOpen(true);
        }}
      >
        <span
          className={cn(
            "relative flex h-full w-full items-center justify-center overflow-hidden rounded-11 p-12",
            !imageFile &&
              !imageUrl &&
              "border-2 border-dashed border-coolGray-400",
            !imageFile &&
              !imageUrl &&
              !disabled &&
              "group-hover:border-coolGray-500",
          )}
        >
          {imageFile || imageUrl ? (
            <>
              <Image
                src={imageFile ? URL.createObjectURL(imageFile) : imageUrl!}
                alt={`${type} 미리보기 이미지`}
                fill
                className="object-cover"
                unoptimized
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
        <NavigationModal
          type={type}
          setFile={handleSetFile}
          setUrl={handleSetUrl}
        />
      </Dialog>
    </>
  );
}

export default ImageRefInput;
