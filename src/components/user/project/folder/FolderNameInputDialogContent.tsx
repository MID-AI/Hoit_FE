import FolderNameInput from "@/components/common/input/FolderNameInput";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

interface Props {
  modalTitle: string;
  folderName: string;
  handleInputChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

function FolderNameInputDialogContent({
  modalTitle,
  folderName,
  handleInputChange,
  handleSubmit,
}: Props) {
  return (
    <>
      <DialogTitle className="mb-78">{modalTitle}</DialogTitle>
      <DialogDescription className="w-full">
        <FolderNameInput
          folderName={folderName}
          handleInputChange={handleInputChange}
        />
        <span className="mt-87 flex items-center justify-end gap-28">
          <DialogClose id="closeModal" asChild>
            <Button variant="secondary">취소</Button>
          </DialogClose>
          <Button onClick={handleSubmit}>확인</Button>
        </span>
      </DialogDescription>
    </>
  );
}

export default FolderNameInputDialogContent;
