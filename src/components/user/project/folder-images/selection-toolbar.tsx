"use client";

import { editModeAtom } from "@/stores/edit-folder-atom";
import { useAtom } from "jotai";
import ToolbarImagesDelete from "./toolbar/toolbar-images-delete";
import ToolbarFolderMove from "./toolbar/toolbar-folder-move";
import ToolbarDownload from "./toolbar/toolbar-download";

function SelectionToolbar() {
  const [editMode, setEditMode] = useAtom(editModeAtom);

  return (
    <>
      {editMode ? (
        <button
          onClick={() => setEditMode((prev) => !prev)}
          className="mt-69 rounded-22 bg-coolGray-200 px-15 py-4 text-Type-20-bold text-coolGray-600"
        >
          선택하기
        </button>
      ) : (
        <div className="mt-69 flex items-center text-Type-20-bold">
          <ToolbarDownload />
          <ToolbarFolderMove />
          <ToolbarImagesDelete />
          <button className="ml-26 rounded-22 bg-cBlue-400 px-13 py-4 text-white">
            취소
          </button>
        </div>
      )}
    </>
  );
}

export default SelectionToolbar;
