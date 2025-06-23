"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { errorDialogAtom } from "@/stores/error-atom";
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
      <DialogContent className="flex w-full max-w-550 flex-col gap-12 px-38 py-44">
        <DialogTitle>{error.heading}</DialogTitle>
        <DialogDescription className="flex py-12">
          {error.body}
        </DialogDescription>
        <div className="flex w-full items-end justify-end">
          <Button onClick={handleClose}>{error.button}</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ErrorDialog;
