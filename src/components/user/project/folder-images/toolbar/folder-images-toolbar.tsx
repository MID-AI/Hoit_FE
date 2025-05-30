"use client";

import { useAtom, useAtomValue } from "jotai";

import {
  editModeFolderAtom,
  isFolderEmptyAtom,
  selectedFolderCardsAtom,
} from "@/stores/project-atom";
import ToolbarFolderMove from "./toolbar-folder-move";
import ToolbarDownload from "./toolbar-download";
import ToolbarImagesDelete from "./toolbar-images-delete";
import { useParams } from "next/navigation";
import Toolbar from "../../toolbar/Toolbar";

function FolderImagesToolbar() {
  const params = useParams();
  const id = params.id;
  const [editModeFolder, setEditModeFolder] = useAtom(editModeFolderAtom);
  const [selectedFolderCards, setSelectedFolderCards] = useAtom(
    selectedFolderCardsAtom,
  );
  const isEmpty = useAtomValue(isFolderEmptyAtom);
  if (isEmpty) return null;

  const handleClickCancel = () => {
    setEditModeFolder((prev) => !prev);
    setSelectedFolderCards(new Set());
  };

  return (
    <>
      {editModeFolder ? (
        <Toolbar onClick={handleClickCancel}>
          <span className="mr-2 text-coolGray-500">
            {selectedFolderCards.size} 개 선택
          </span>
          <ToolbarFolderMove />
          <ToolbarDownload />
          <ToolbarImagesDelete
            folderId={Number(id)}
            selectedCards={selectedFolderCards}
            setSelectedCards={setSelectedFolderCards}
          />
        </Toolbar>
      ) : (
        <button
          onClick={() => setEditModeFolder((prev) => !prev)}
          className="rounded-22 bg-coolGray-200 px-15 py-4 text-Type-20-bold text-coolGray-600"
        >
          선택하기
        </button>
      )}
    </>
  );
}

export default FolderImagesToolbar;
