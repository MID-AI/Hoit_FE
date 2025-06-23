"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import cn from "@/utils/cn";
import { useState } from "react";
import ConfirmDeleteAccount from "./ConfirmDeleteAccount";

interface Props {
  credit: number;
  editOpen: boolean;
  setEditOpen: (open: boolean) => void;
}

function AuthModal({ credit, editOpen, setEditOpen }: Props) {
  const [commentOpen, setCommentOpen] = useState(false);

  return (
    <Dialog open={editOpen} onOpenChange={setEditOpen}>
      <DialogContent className="flex h-fit max-w-450 flex-col items-center justify-center px-38 pb-44 pt-32">
        <DialogTitle>계정</DialogTitle>
        <DialogDescription className="sr-only">
          크레딧 확인 및 계정 탈퇴
        </DialogDescription>
        <div className="mt-16 flex h-full w-full flex-col items-center justify-center gap-32">
          <div className="flex w-full flex-col items-start gap-8">
            <div className="w-full border-b py-8 text-Type-18-medium">
              내 크레딧
            </div>
            <span>{credit} 개</span>
          </div>
          <div className="flex w-full flex-col items-start gap-8">
            <div className="w-full border-b py-8 text-Type-18-medium">
              계정 삭제
            </div>
            <div
              className={cn(
                "flex w-full items-center justify-between",
                commentOpen && "flex-col",
              )}
            >
              <span>계정을 삭제하시겠습니까?</span>
              {commentOpen ? (
                <ConfirmDeleteAccount setCommentOpen={setCommentOpen} />
              ) : (
                <button
                  className="rounded-18 border border-red-600 px-16 py-4 text-red-600 hover:bg-red-100"
                  onClick={() => setCommentOpen(true)}
                >
                  삭제
                </button>
              )}
            </div>

            <div></div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AuthModal;
