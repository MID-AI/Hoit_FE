"use client";

import {
  editModeAllTabAtom,
  isAllEmptyAtom,
  selectedAllTabCardsAtom,
} from "@/stores/project-atom";
import { useAtom, useAtomValue } from "jotai";
import Toolbar from "../../toolbar/Toolbar";
import ToolbarImageDelete from "./ToolbarImageDelete";
import ToolbarImageDownload from "./ToolbarImageDownload";

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
        <Toolbar onClick={handleClickCancel}>
          <span className="mr-2 text-coolGray-500">
            {selectedAllTabCards.size} 개 선택
          </span>
          <ToolbarImageDownload />
          <ToolbarImageDelete
            selectedCards={selectedAllTabCards}
            setSelectedCards={setSelectedAllTabCards}
          />
        </Toolbar>
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
