"use client";

import {
  editModeAllTabAtom,
  isAllEmptyAtom,
  selectedAllTabCardsAtom,
} from "@/stores/project-atom";
import { useAtom, useAtomValue } from "jotai";

import ToolbarImageDelete from "./ToolbarImageDelete";
import ToolbarImageDownload from "./ToolbarImageDownload";
import ToolbarWrapper from "../../toolbar/ToolbarWrapper";
import ToolbarAddImageToFolder from "./ToolbarAddImageToFolder";

function TabAllToolbar() {
  const [editModeAllTab, setEditModeAllTab] = useAtom(editModeAllTabAtom);
  const [selectedAllTabCards, setSelectedAllTabCards] = useAtom(
    selectedAllTabCardsAtom,
  );
  const isEmpty = useAtomValue(isAllEmptyAtom);
  if (isEmpty === null || isEmpty) return null;

  const handleClickCancel = () => {
    setEditModeAllTab((prev) => !prev);
    setSelectedAllTabCards(new Set());
  };

  return (
    <>
      {editModeAllTab ? (
        <ToolbarWrapper onClick={handleClickCancel}>
          {selectedAllTabCards.size > 0 && (
            <span className="mr-2 text-coolGray-500">
              {selectedAllTabCards.size} 개 선택
            </span>
          )}
          <ToolbarAddImageToFolder selectedCards={selectedAllTabCards} />

          <ToolbarImageDownload />
          <ToolbarImageDelete
            selectedCards={selectedAllTabCards}
            setSelectedCards={setSelectedAllTabCards}
          />
        </ToolbarWrapper>
      ) : (
        <button
          onClick={() => setEditModeAllTab((prev) => !prev)}
          className="rounded-22 bg-coolGray-200 px-15 py-4 text-Type-20-bold text-coolGray-600"
        >
          선택하기
        </button>
      )}
    </>
  );
}

export default TabAllToolbar;
