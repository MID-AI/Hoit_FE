"use client";

import { useState } from "react";
import MediaNav from "./MediaNav";
import ToggleIcon from "@/assets/icon/toggle.svg";
import cn from "@/utils/cn";
import type { ImageType } from "@/@types/images";
import { usePathname } from "next/navigation";

function MediaNavWrapper({
  image,
  context,
  isList,
}: {
  image: ImageType;
  context?: readonly unknown[];
  isList?: boolean;
}) {
  const [open, setOpen] = useState<boolean>(true);
  const pathname = usePathname();
  const isModal = pathname.includes("@modal");
  const isUserImage = pathname.includes("my");

  if (open) {
    return (
      <MediaNav
        onClick={() => setOpen(false)}
        image={image}
        context={context}
        isList={isList}
        isUserImage={isUserImage}
      />
    );
  }

  return (
    <button
      onClick={() => setOpen(true)}
      className={cn("absolute right-28 top-30", isModal && "top-95")}
    >
      <ToggleIcon className={isModal ? "text-white" : ""} />
    </button>
  );
}

export default MediaNavWrapper;
