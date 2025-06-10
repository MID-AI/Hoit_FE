"use client";

import { useState } from "react";
import UserIcon from "@/assets/icon/profile.svg";

import Image from "next/image";
import { Dialog } from "@/components/ui/dialog";
import LoginModal from "@/components/common/auth/LoginModal";

function SidebarNickname({
  nickname,
  profileImage,
}: {
  nickname?: string;
  profileImage?: string;
}) {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="box-border flex h-48 w-full cursor-pointer items-center justify-center gap-8 rounded-71 px-0 py-0 text-coolGray-500 lg:justify-start lg:px-12 lg:py-12"
      >
        {nickname && profileImage ? (
          <>
            <Image
              src={profileImage}
              width={24}
              height={24}
              alt={`${nickname} 프로필 이미지`}
              className="hidden h-24 w-24 rounded-full md:block lg:hidden"
            />
            <span className="hidden lg:block">{nickname}</span>
          </>
        ) : (
          <>
            <UserIcon />
            <span className="hidden lg:block">로그인</span>
          </>
        )}
      </button>
      <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
        <LoginModal />
      </Dialog>
    </>
  );
}

export default SidebarNickname;
