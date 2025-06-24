"use client";

import { useAtom, useAtomValue } from "jotai";

import {
  editModeFolderAtom,
  isFolderEmptyAtom,
  selectedFolderCardsAtom,
} from "@/stores/project-atom";
// import ToolbarFolderMove from "./ToolbarFolderMove";
import ToolbarDownload from "./ToolbarDownload";
import ToolbarImagesDelete from "./ToolbarImagesDelete";
import { useParams } from "next/navigation";
import ToolbarWrapper from "../../toolbar/ToolbarWrapper";

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
    <div className="flex w-full justify-end">
      {editModeFolder ? (
        <ToolbarWrapper onClick={handleClickCancel}>
          <span className="mr-2 text-coolGray-500">
            {selectedFolderCards.size} 개 선택
          </span>
          {/* <ToolbarFolderMove /> */}
          <ToolbarDownload />
          <ToolbarImagesDelete
            folderId={Number(id)}
            selectedCards={selectedFolderCards}
            setSelectedCards={setSelectedFolderCards}
          />
        </ToolbarWrapper>
      ) : (
        <button
          onClick={() => setEditModeFolder((prev) => !prev)}
          className="w-fit rounded-22 bg-coolGray-200 px-15 py-4 text-Type-18-bold text-coolGray-600"
        >
          선택하기
        </button>
      )}
    </div>
  );
}

export default FolderImagesToolbar;
