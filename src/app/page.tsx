"use client";

import { Modal } from "@/components/common/modal/Modal";
import { useModalStore } from "../store/useModalStore";
import { AuthButtons } from "@/components/auth/AuthButtons";

export default function Home() {
  const { openModal } = useModalStore();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <button
        onClick={openModal}
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        모달 열기
      </button>
      <Modal>
        <h2 className="mb-4 text-xl font-bold">모달 제목</h2>
        <AuthButtons />
      </Modal>
    </div>
  );
}
