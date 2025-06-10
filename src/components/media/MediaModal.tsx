"use client";

import { useEffect } from "react";
import XIcon from "@/assets/icon/X.svg";
import { ImageType } from "@/@types/images";
import MediaWrapper from "./MediaWrapper";

interface MediaModalProps {
  mediaId: number;
  images: ImageType[];
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

const MediaModal = ({
  mediaId,
  images,
  onClose,
  onNext,
  onPrev,
}: MediaModalProps) => {
  const selected = images.find((img) => img.id === mediaId);

  // ESC 누르면 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!selected) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      {/* 닫기 버튼 */}
      <button onClick={onClose} className="absolute right-30 top-30 z-50">
        <XIcon className="text-white" />
      </button>
      {/* 이미지 */}
      <MediaWrapper image={selected} onPrev={onPrev} onNext={onNext} />
    </div>
  );
};

export default MediaModal;
