"use client";

import { useState } from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import useLogout from "@/hooks/user/auth/useLogout";
import ProfileModal from "@/components/user/profile/ProfileModal";
import AuthModal from "@/components/user/auth/AuthModal";

function SidebarNickname({
  nickname,
  profileImage,
  credit,
}: {
  nickname?: string;
  profileImage?: string;
  credit?: number;
}) {
  const [profile, setProfile] = useState(false);
  const [auth, setAuth] = useState(false);

  const { mutate: logout } = useLogout();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="box-border flex h-48 w-full cursor-pointer items-center justify-center gap-8 rounded-71 px-0 py-0 text-coolGray-500 lg:justify-start lg:px-12 lg:py-12">
            <Image
              src={profileImage ?? ""}
              width={24}
              height={24}
              alt={`${nickname} 프로필 이미지`}
              className="hidden h-24 w-24 rounded-full border border-coolGray-300 md:block lg:hidden"
            />
            <span className="hidden lg:block">{nickname}</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-200 translate-x-10 rounded-16 border border-coolGray-300 p-4 text-Type-14-medium text-coolGray-800">
          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={() => setTimeout(() => setProfile(true), 0)}
            >
              프로필
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => setTimeout(() => setAuth(true), 0)}
            >
              계정
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => logout()}>
              로그아웃
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <ProfileModal
        nickname={nickname!}
        profileImage={profileImage!}
        editOpen={profile}
        setEditOpen={setProfile}
      />
      <AuthModal credit={credit ?? 0} editOpen={auth} setEditOpen={setAuth} />
    </>
  );
}

export default SidebarNickname;
