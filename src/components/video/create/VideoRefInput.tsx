"use client";

import NavigationModal from "@/components/create/navigation/NavigationModal";
import { Dialog } from "@/components/ui/dialog";
import { useState } from "react";
import RefImageIcon from "@/assets/create/ref_image.svg";
import DeleteButtonIcon from "@/assets/create/delete_button.svg";
import cn from "@/utils/cn";
import Image from "next/image";

interface Props {
  disabled: boolean;
  reference: {
    ref: File | null;
    refUrl: string | null;
  };
  setReference: (value: File | string | null, type: "file" | "url") => void;
}

function VideoRefInput({ disabled, reference, setReference }: Props) {
  const [open, setOpen] = useState(false);

  const onClickDelete = () => {
    setReference(null, "file");
    setReference(null, "url");
  };

  const handleSetFile = (file: File | null) => {
    setReference(file, "file");
  };

  const handleSetUrl = (url: string | null) => {
    setReference(url, "url");
  };

  return (
    <>
      <div
        className={cn(
          "group flex h-148 w-full shrink-0 cursor-pointer items-center justify-center gap-12 rounded-20 border border-coolGray-100 bg-coolGray-100 p-12",
          reference.ref || reference.refUrl || disabled
            ? "cursor-default"
            : "cursor-pointer hover:border-coolGray-500 hover:bg-coolGray-300",
        )}
        onClick={() => {
          if (!reference.ref && !reference.refUrl && !disabled) setOpen(true);
        }}
      >
        <span
          className={cn(
            "relative flex h-full w-full items-center justify-center overflow-hidden rounded-11 p-12",
            !reference.ref &&
              !reference.refUrl &&
              "border-2 border-dashed border-coolGray-400",
            !reference.ref &&
              !reference.refUrl &&
              !disabled &&
              "group-hover:border-coolGray-500",
          )}
        >
          {reference.ref || reference.refUrl ? (
            <>
              <Image
                src={
                  reference.ref
                    ? URL.createObjectURL(reference.ref)
                    : reference.refUrl!
                }
                alt="미리보기 이미지"
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
          type="imageRef"
          setFile={handleSetFile}
          setUrl={handleSetUrl}
        />
      </Dialog>
    </>
  );
}

export default VideoRefInput;
