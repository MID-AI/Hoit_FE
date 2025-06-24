import ToolbarEditButton from "../../toolbar/ToolbarEditButton";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import useDeleteImages from "@/hooks/user/project/all/useDeleteImages";
import { ImageMinus } from "lucide-react";

interface Props {
  selectedCards: Set<number>;
  setSelectedCards: (value: Set<number>) => void;
}

function ToolbarImageDelete({ selectedCards, setSelectedCards }: Props) {
  const deleteMutation = useDeleteImages();

  const handleClick = () => {
    deleteMutation.mutate(Array.from(selectedCards), {
      onSuccess: () => setSelectedCards(new Set()),
    });
    document.getElementById("closeModal")?.click();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <ToolbarEditButton icon={<ImageMinus />} text="삭제하기" />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>이미지를 삭제하시겠습니까?</DialogTitle>
        <DialogDescription>
          삭제된 이미지는 되돌릴 수 없습니다.
        </DialogDescription>
        <span className="mt-26 flex items-center justify-end gap-14">
          <DialogClose id="closeModal" asChild>
            <Button variant="secondary">취소</Button>
          </DialogClose>
          <Button onClick={handleClick}>삭제하기</Button>
        </span>
      </DialogContent>
    </Dialog>
  );
}

export default ToolbarImageDelete;
