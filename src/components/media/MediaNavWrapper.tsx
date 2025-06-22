"use client";

import { useState } from "react";
import MediaNav from "./MediaNav";
import ToggleIcon from "@/assets/icon/toggle.svg";
import cn from "@/utils/cn";
import type { ImageType } from "@/@types/images";
import useMediaQuery from "@/hooks/common/useMediaQuery";

function MediaNavWrapper({ image }: { image: ImageType }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [open, setOpen] = useState<boolean>(() => !isMobile);

  if (open) {
    return <MediaNav onClick={() => setOpen(false)} image={image} />;
  }

  return (
    <button
      onClick={() => setOpen(true)}
      aria-label="네비게이션 열기"
      className={cn("absolute right-28 top-30", !open && "top-95")}
    >
      <ToggleIcon className={!open ? "text-white" : ""} />
    </button>
  );
}

export default MediaNavWrapper;
