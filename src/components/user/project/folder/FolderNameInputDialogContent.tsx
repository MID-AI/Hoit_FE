import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface Props {
  modalTitle: string;
  maxLength: number;
  folderName: string;
  handleInputChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

function FolderNameInputDialogContent({
  modalTitle,
  maxLength,
  folderName,
  handleInputChange,
  handleSubmit,
}: Props) {
  return (
    <>
      <DialogTitle className="mb-78">{modalTitle}</DialogTitle>
      <DialogDescription className="w-full">
        <span className="relative">
          <Input
            placeholder="폴더 이름을 입력하세요"
            className="mb-87 rounded-22 border-2 border-cBlue-400 px-28 py-22 placeholder:text-coolGray-300"
            value={folderName}
            maxLength={maxLength}
            onInput={handleInputChange}
          />
          <span className="absolute right-0 top-0 pr-34 pt-24 text-Type-20-bold text-coolGray-500">
            {folderName.length}/{maxLength}
          </span>
        </span>

        <span className="flex items-center justify-end gap-28">
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
