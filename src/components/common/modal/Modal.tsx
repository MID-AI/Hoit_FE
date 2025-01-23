import { useModalStore } from "@/store/useModalStore";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import ScrollPreventer from "./ScrollPreventer";

export const Modal: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isOpen, closeModal } = useModalStore();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return createPortal(
    <ScrollPreventer isOpen={true}>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div ref={modalRef} className="rounded-lg bg-white p-6 shadow-lg">
          {children}
          <button
            onClick={closeModal}
            className="mt-4 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            닫기
          </button>
        </div>
      </div>
    </ScrollPreventer>,
    document.body,
  );
};
