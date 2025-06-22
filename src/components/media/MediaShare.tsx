"use client";

import { CLIENT_URL } from "@/apis/client/baseUrl";
import ShareIcon from "@/assets/icon/share.svg";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

function MediaShare({ isShared }: { isShared: boolean | null }) {
  const pathname = usePathname();

  const handleShare = useCallback(() => {
    const pathParts = pathname.split("/").filter(Boolean);
    const imageId = pathParts[pathParts.length - 1];
    const shareUrl = `${CLIENT_URL}/media/${imageId}`;
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        alert("링크가 복사되었습니다.");
      })
      .catch(() => {
        alert("링크 복사에 실패했습니다.");
      });
  }, [pathname]);

  if (isShared === null || !isShared) return null;
  return (
    <button onClick={handleShare} className="ml-18">
      <ShareIcon />
    </button>
  );
}

export default MediaShare;
