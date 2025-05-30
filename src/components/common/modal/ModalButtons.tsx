import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";

function ModalButtons({ onConfirm }: { onConfirm?: () => void }) {
  return (
    <div className="mt-26 flex items-center justify-end gap-14">
      <DialogClose id="closeModal" asChild>
        <Button variant="secondary">취소</Button>
      </DialogClose>
      <Button onClick={onConfirm}>확인</Button>
    </div>
  );
}

export default ModalButtons;
