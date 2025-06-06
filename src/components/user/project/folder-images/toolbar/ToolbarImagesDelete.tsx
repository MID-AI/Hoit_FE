"use client";

import useDeleteFolderImages from "@/hooks/user/project/folder/useDeleteFolderImages";
import ToolbarEditButton from "../../toolbar/ToolbarEditButton";
import DeleteIcon from "@/assets/my/delete_folder.svg";

interface Props {
  folderId: number;
  selectedCards: Set<number>;
  setSelectedCards: (value: Set<number>) => void;
}

function ToolbarImagesDelete({
  folderId,
  selectedCards,
  setSelectedCards,
}: Props) {
  const deleteMutation = useDeleteFolderImages();

  const handleClick = () => {
    deleteMutation.mutate(
      {
        folderId,
        imageIds: Array.from(selectedCards),
      },
      { onSuccess: () => setSelectedCards(new Set()) },
    );
  };
  return (
    <ToolbarEditButton
      icon={<DeleteIcon />}
      text="삭제하기"
      onClick={handleClick}
    />
  );
}

export default ToolbarImagesDelete;
