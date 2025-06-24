"use client";

import LoginModal from "./LoginModal";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { cloneElement, isValidElement, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { UserType } from "@/@types/auth";
import { QUERY_KEY } from "@/constants/query-key";

function LoginChecker({ children }: { children?: React.ReactNode }) {
  const queryClient = useQueryClient();
  const cachedUser = queryClient.getQueryData<UserType | null>(
    QUERY_KEY.MY.PROFILE,
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!cachedUser && !children) setOpen(true);
  }, [cachedUser, children]);

  if (!cachedUser && children && isValidElement(children))
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {cloneElement(children as React.ReactElement<any>, {
            onClick: (e: any) => {
              e.preventDefault();
              e.stopPropagation();
              setOpen(true);
            },
          })}
        </DialogTrigger>
        <LoginModal />
      </Dialog>
    );

  if (cachedUser === null || !cachedUser)
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <LoginModal />
      </Dialog>
    );
  return null;
}

export default LoginChecker;
