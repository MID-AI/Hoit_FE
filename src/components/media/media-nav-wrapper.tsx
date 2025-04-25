"use client";

import { useState } from "react";
import MediaNav from "./media-nav";
import ToggleIcon from "@/assets/icon/toggle.svg";
import cn from "@/utils/cn";
import type { ImageType } from "@/@types/images";

function MediaNavWrapper({
  isModal,
  image,
  context,
  isList,
}: {
  isModal?: boolean;
  image: ImageType;
  context?: readonly unknown[];
  isList?: boolean;
}) {
  const [open, setOpen] = useState<boolean>(true);

  if (open) {
    return (
      <MediaNav
        onClick={() => setOpen(false)}
        image={image}
        context={context}
        isList={isList}
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
