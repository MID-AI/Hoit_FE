"use client";

import UserIcon from "@/assets/icon/profile.svg";
import LoginModal from "../common/auth/login-modal";
import { Dialog } from "../ui/dialog";
import { cn } from "@/lib/utils";
import useGetUser from "@/hooks/user/use-get-user-profile";
import { useState } from "react";

export default function SidebarUser({
  icon,
  mobile,
}: {
  icon?: boolean;
  mobile?: boolean;
}) {
  const { data } = useGetUser();
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className={cn(
          "box-border flex h-48 w-full cursor-pointer items-center gap-8 rounded-71 px-12 py-12 text-coolGray-500",
          icon && "justify-center px-0 py-0",
          mobile &&
            "flex flex-col space-y-1 text-muted-foreground hover:bg-transparent hover:text-primary",
        )}
      >
        {data ? (
          <span>{data.nickname}</span>
        ) : (
          <>
            <UserIcon />
            {!icon && <span className={mobile ? "text-xs" : ""}>로그인</span>}
          </>
        )}
      </button>
      <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
        <LoginModal />
      </Dialog>
    </>
  );
}
