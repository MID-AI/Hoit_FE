"use client";

import LoginModal from "@/components/common/auth/LoginModal";
import { Dialog } from "@/components/ui/dialog";
import { useState } from "react";
import UserIcon from "@/assets/icon/profile.svg";
import cn from "@/utils/cn";

function SidebarLogin({ className }: { className?: string }) {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className={cn(
          "box-border flex h-48 w-full cursor-pointer items-center justify-center gap-8 rounded-71 px-0 py-0 text-coolGray-500 lg:justify-start lg:px-12 lg:py-12",
          className,
        )}
      >
        <UserIcon />
        <span className="hidden lg:block">로그인</span>
      </button>
      <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
        <LoginModal />
      </Dialog>
    </>
  );
}

export default SidebarLogin;
