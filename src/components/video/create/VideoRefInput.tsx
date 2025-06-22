"use client";

import RefImageIcon from "@/assets/create/ref_image.svg";
import DeleteButtonIcon from "@/assets/create/delete_button.svg";
import cn from "@/utils/cn";
import Image from "next/image";
import { IMAGE_ALLOWED_FILE_TYPES } from "@/constants/input-limits";

interface Props {
  disabled: boolean;
  reference: {
    ref: File | null;
  };
  setReference: (value: File | null) => void;
}

function VideoRefInput({ disabled, reference, setReference }: Props) {
  const onClickDelete = () => {
    setReference(null);
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      if (!IMAGE_ALLOWED_FILE_TYPES.includes(file.type)) {
        console.warn("파일 타입 에러");
        return;
      }
      setReference(file);
    }
    event.target.value = "";
  };

  return (
    <>
      {reference.ref ? (
        <div
          className={cn(
            "group flex h-148 w-full shrink-0 items-center justify-center gap-12 rounded-20 border border-coolGray-100 bg-coolGray-100 p-12",
            disabled && "cursor-default",
          )}
        >
          <span
            className={cn(
              "relative flex h-full w-full items-center justify-center overflow-hidden rounded-11 p-12",
              !disabled && "group-hover:border-coolGray-500",
            )}
          >
            <Image
              src={URL.createObjectURL(reference.ref)}
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
          </span>
        </div>
      ) : (
        <>
          <label
            htmlFor="ref"
            className={cn(
              "group flex h-148 w-full shrink-0 cursor-pointer items-center justify-center gap-12 rounded-20 border border-coolGray-100 bg-coolGray-100 p-12",
              disabled
                ? "cursor-default"
                : "cursor-pointer hover:border-coolGray-500 hover:bg-coolGray-300",
            )}
          >
            <span
              className={cn(
                "relative flex h-full w-full items-center justify-center overflow-hidden rounded-11 border-2 border-dashed border-coolGray-400 p-12",
                !disabled && "group-hover:border-coolGray-500",
              )}
            >
              <RefImageIcon width={24} height={24} className="shrink-0" />
              <div className="ml-8 shrink-0 text-Type-12-regular">
                클릭해서 레퍼런스 추가하세요
              </div>
            </span>
          </label>
          <input
            id="ref"
            type="file"
            name="file"
            onChange={handleFileChange}
            className="hidden"
            accept="image/*"
          />
        </>
      )}
    </>
  );
}

export default VideoRefInput;
