"use client";

import { editModeAtom, selectedCardsAtom } from "@/stores/edit-folder-atom";
import { useAtom } from "jotai";
import ToolbarImagesDelete from "./toolbar/toolbar-images-delete";
import ToolbarFolderMove from "./toolbar/toolbar-folder-move";
import ToolbarDownload from "./toolbar/toolbar-download";
import { useParams } from "next/navigation";

function SelectionToolbar() {
  const params = useParams();
  const id = params.id;
  const [editMode, setEditMode] = useAtom(editModeAtom);
  const [selectedCards, setSelectedCards] = useAtom(selectedCardsAtom);

  return (
    <>
      {editMode ? (
        <div className="mt-69 flex items-center text-Type-20-bold">
          <span className="mr-2 text-coolGray-500">
            {selectedCards.size} 개 선택
          </span>
          <ToolbarFolderMove />
          <ToolbarDownload />
          <ToolbarImagesDelete
            folderId={Number(id)}
            selectedCards={selectedCards}
            setSelectedCards={setSelectedCards}
          />
          <button
            onClick={() => {
              setEditMode((prev) => !prev);
              setSelectedCards(new Set());
            }}
            className="ml-26 rounded-22 bg-cBlue-400 px-13 py-4 text-white"
          >
            취소
          </button>
        </div>
      ) : (
        <button
          onClick={() => setEditMode((prev) => !prev)}
          className="mt-69 rounded-22 bg-coolGray-200 px-15 py-4 text-Type-20-bold text-coolGray-600"
        >
          선택하기
        </button>
      )}
    </>
  );
}

export default SelectionToolbar;
