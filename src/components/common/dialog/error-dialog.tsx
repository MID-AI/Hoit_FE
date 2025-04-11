"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { errorDialogAtom } from "@/stores/common-atom";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";

function ErrorDialog() {
  const [error, setError] = useAtom(errorDialogAtom);
  const router = useRouter();

  if (!error) return null;
  const handleClose = () => {
    if (error.redirectUrl) {
      router.push(error.redirectUrl);
    }
    setError(null);
  };

  return (
    <Dialog open={error.isOpen} onOpenChange={() => setError(null)}>
      <DialogContent className="px-38 py-44">
        <DialogTitle>{error.heading}</DialogTitle>
        <DialogDescription className="flex gap-95">
          {error.body}
        </DialogDescription>
        <Button onClick={handleClose}>{error.button}</Button>
      </DialogContent>
    </Dialog>
  );
}

export default ErrorDialog;
