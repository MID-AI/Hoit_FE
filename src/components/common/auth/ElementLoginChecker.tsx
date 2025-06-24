"use client";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { cloneElement, useState } from "react";
import LoginModal from "./LoginModal";
import { QUERY_KEY } from "@/constants/query-key";
import { useQueryClient } from "@tanstack/react-query";
import { UserType } from "@/@types/auth";

function ElementLoginChecker({
  children,
  onRequireLogin,
}: {
  children: React.ReactElement;
  onRequireLogin?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const cachedUser = queryClient.getQueryData<UserType | null>(
    QUERY_KEY.MY.PROFILE,
  );

  const handleClick = (e: React.MouseEvent) => {
    if (!cachedUser) {
      e.preventDefault();
      e.stopPropagation();
      setOpen(true);
      onRequireLogin?.();
    }
  };

  if (cachedUser && cachedUser !== null) {
    if (children) return <>{children}</>;
  } else {
    return (
      <>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            {cloneElement(children as React.ReactElement<any>, {
              onClick: handleClick,
            })}
          </DialogTrigger>
          <LoginModal />
        </Dialog>
      </>
    );
  }

  return null;
}

export default ElementLoginChecker;
