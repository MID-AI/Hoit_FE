"use client";

import UserIcon from "@/assets/icon/profile.svg";
import LoginModal from "../common/auth/login-modal";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { cn } from "@/lib/utils";
import useGetUser from "@/hooks/user/use-get-user-profile";
import { useAtom, useSetAtom } from "jotai";
import {
  isAuthenticatedAtom,
  userCreditAtom,
  userNickNameAtom,
} from "@/stores/user-atom";
import { useEffect } from "react";

export default function SidebarUser({
  icon,
  mobile,
}: {
  icon?: boolean;
  mobile?: boolean;
}) {
  const { data, isLoading, error } = useGetUser();
  const setNickName = useSetAtom(userNickNameAtom);
  const setCredit = useSetAtom(userCreditAtom);
  const [isModalOpen, setModalOpen] = useAtom(isAuthenticatedAtom);

  useEffect(() => {
    if (data) {
      setNickName(data.nickname);
      setCredit(data.credit);
    }
  }, [data, setCredit, setNickName]);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (error) {
    console.error(error);
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger asChild>
        <div
          className={cn(
            "box-border flex h-48 w-full cursor-pointer items-center gap-8 rounded-71 px-12 py-12 text-coolGray-500",
            icon && "justify-center px-0 py-0",
            mobile &&
              "flex flex-col space-y-1 text-muted-foreground hover:bg-transparent hover:text-primary",
          )}
        >
          {data ? (
            <div>{data.nickname}</div>
          ) : (
            <>
              <UserIcon className={cn(icon || mobile ? "" : "")} />
              {!icon && <span className={mobile ? "text-xs" : ""}>로그인</span>}
            </>
          )}
        </div>
      </DialogTrigger>
      <LoginModal />
    </Dialog>
  );
}
