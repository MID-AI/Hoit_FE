"use client";

import { useEffect } from "react";
import XIcon from "@/assets/icon/X.svg";

import MediaWrapper from "./MediaWrapper";
import useMediaNavigation from "@/hooks/media/useMediaNavigation";
import { ImageType } from "@/@types/images";

const MediaModal = ({
  images,
  pageRoute,
}: {
  images: ImageType[];
  pageRoute: any;
}) => {
  const { mediaId, showNext, showPrev, closeModal, hasNext, hasPrev } =
    useMediaNavigation(images, pageRoute);

  const selected = images.find((img) => img.id === mediaId);

  // ESC 누르면 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = "16px";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.marginRight = "";
    };
  }, [selected]);

  if (!selected) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      {/* 닫기 버튼 */}
      <button onClick={closeModal} className="absolute right-30 top-30 z-50">
        <XIcon className="text-white" />
      </button>
      {/* 이미지 */}
      <MediaWrapper
        image={selected}
        onPrev={hasPrev ? showPrev : undefined}
        onNext={hasNext ? showNext : undefined}
      />
    </div>
  );
};

export default MediaModal;
