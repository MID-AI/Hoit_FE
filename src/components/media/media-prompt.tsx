"use client";

import CodyIcon from "@/assets/icon/copy.svg";
import { useCallback } from "react";

function MediaPrompt({ prompt }: { prompt: string }) {
  const handleCopy = useCallback(() => {
    navigator.clipboard
      .writeText(prompt)
      .then(() => {
        alert("프롬프트가 복사되었습니다.");
      })
      .catch(() => {
        alert("프롬프트 복사에 실패했습니다.");
      });
  }, [prompt]);

  return (
    <div className="mb-48">
      <div className="mb-20 flex items-center justify-between">
        <h2 className="text-Type-20-bold">프롬프트</h2>
        <button
          onClick={handleCopy}
          className="flex items-center gap-5 text-Type-12-medium"
        >
          복사하기 <CodyIcon />
        </button>
      </div>
      <span className="text-Type-18-regular">{prompt}</span>
    </div>
  );
}

export default MediaPrompt;
