"use client";

import LoginModal from "./LoginModal";
import { Dialog } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { UserType } from "@/@types/auth";
import { QUERY_KEY } from "@/constants/query-key";

function LoginChecker() {
  const queryClient = useQueryClient();
  const cachedUser = queryClient.getQueryData<UserType | null>(
    QUERY_KEY.MY.PROFILE,
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (cachedUser === null || !cachedUser) {
      setOpen(true);
    }
  }, [cachedUser]);

  if (cachedUser === null || !cachedUser)
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <LoginModal />
      </Dialog>
    );
  return null;
}

export default LoginChecker;
