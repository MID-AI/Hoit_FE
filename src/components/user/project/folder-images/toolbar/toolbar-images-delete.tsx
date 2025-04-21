"use client";

import useDeleteFolderImages from "@/hooks/user/project/folder/use-delete-folder-images";
import ToolbarEditButton from "../../toolbar/toolbar-edit-button";
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
