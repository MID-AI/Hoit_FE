"use client";

import { useState } from "react";
import LoginModal from "../common/auth/LoginModal";
import { Dialog, DialogTrigger } from "../ui/dialog";
import UserIcon from "@/assets/icon/profile.svg";
import cn from "@/utils/cn";

function LoginDialog({ icon, mobile }: { icon?: boolean; mobile?: boolean }) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger asChild>
        <span
          className={cn(
            "box-border flex h-48 w-full cursor-pointer items-center gap-8 rounded-71 px-12 py-12 text-coolGray-500",
            icon && "justify-center px-0 py-0",
            mobile &&
              "flex flex-col space-y-1 text-muted-foreground hover:bg-transparent hover:text-primary",
          )}
        >
          <UserIcon />
          로그인
        </span>
      </DialogTrigger>
      <LoginModal />
    </Dialog>
  );
}

export default LoginDialog;
