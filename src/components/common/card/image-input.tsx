"use client";

import Image from "next/image";
import RefImageIcon from "@/assets/create/ref_image.svg";
import InputImageIcon from "@/assets/create/upload_image.svg";
import DeleteButtonIcon from "@/assets/create/delete_button.svg";
import cn from "@/utils/cn";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import NavigationModal from "@/components/create/navigation/navigation-modal";

function ImageInput({
  type,
  image,
  setImage,
}: {
  type: string;
  image: File | null;
  setImage: (file: File | null) => void;
}) {
  const onClickDelete = () => {
    setImage(null);
  };

  return (
    <div className="flex h-148 w-full shrink-0 items-center justify-center gap-12 rounded-20 border border-coolGray-100 bg-coolGray-100 p-12">
      <div
        className={cn(
          "relative flex h-124 w-124 items-center gap-8 overflow-hidden rounded-11 px-22 py-20",
          image ? "p-0" : "border-2 border-dashed border-coolGray-400",
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
            <div
              className="absolute right-8 top-8 cursor-pointer"
              onClick={onClickDelete}
            >
              <DeleteButtonIcon />
            </div>
          </>
        ) : (
          <>
            <RefImageIcon width={24} height={24} className="shrink-0" />
            <span className="shrink-0 text-Type-14-regular">레퍼런스</span>
          </>
        )}
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex h-64 w-90 cursor-pointer items-center justify-center gap-8 rounded-8 bg-white text-Type-12-regular">
            <InputImageIcon />
            업로드
          </div>
        </DialogTrigger>
        <NavigationModal type={type} setImage={setImage} />
      </Dialog>
    </div>
  );
}

export default ImageInput;
