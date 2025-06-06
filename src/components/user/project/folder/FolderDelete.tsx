"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import useDeleteFolder from "@/hooks/user/project/folder/useDeleteFolder";

interface Props {
  folderId: number;
  deleteOpen: boolean;
  setDeleteOpen: (open: boolean) => void;
}

function FolderDelete({ folderId, deleteOpen, setDeleteOpen }: Props) {
  const deleteMutation = useDeleteFolder();
  const handleSubmit = () => {
    deleteMutation.mutate(folderId, {
      onSuccess: () => setDeleteOpen(false),
    });
  };

  return (
    <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
      <DialogContent className="flex h-435 w-847 flex-col items-center justify-center px-38 pb-44 pt-32">
        <DialogTitle className="mb-78">폴더를 삭제하시겠습니까?</DialogTitle>
        <DialogDescription className="w-full">
          <span>삭제한 폴더는 복구할 수 없습니다.</span>

          <span className="flex items-center justify-end gap-28">
            <DialogClose asChild>
              <Button variant="secondary">취소</Button>
            </DialogClose>
            <Button onClick={handleSubmit} disabled={deleteMutation.isPending}>
              {deleteMutation.isPending ? "삭제 중..." : "삭제하기"}
            </Button>
          </span>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

export default FolderDelete;
