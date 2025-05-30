"use client";

import XIcon from "@/assets/icon/X.svg";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function PageModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.back();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router]);

  if (!mounted) return null;

  return createPortal(
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={(e) => {
        if (e.target === backdropRef.current) {
          router.back();
        }
      }}
    >
      {children}
      <button
        className="absolute right-30 top-30 z-50"
        onClick={() => router.back()}
      >
        <XIcon className="text-white" />
      </button>
    </div>,
    document.getElementById("modal-root") as HTMLElement,
  );
}

export default PageModal;
