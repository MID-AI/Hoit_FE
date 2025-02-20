"use client";

import {
  TAGS_MAIN,
  TAGS_MAIN_REVERSE,
  TAGS_SUB_REVERSE,
} from "@/constants/tags";
import { selectedSubTagAtom, selectedTagAtom } from "@/stores/tags-atom";
import { useAtom } from "jotai";
import SubTag from "../../common/tag/sub-tag";

export default function SubTagList() {
  const [selectedTag] = useAtom(selectedTagAtom);
  const [selectedSubTag, setSelectedSubTag] = useAtom(selectedSubTagAtom);

  const subTags = selectedTag
    ? TAGS_MAIN[TAGS_MAIN_REVERSE[selectedTag]]?.subTag
    : [];

  const handleSubTag = (value: number) => {
    setSelectedSubTag((prev) => (prev === value ? null : value));
  };

  return (
    <div className="flex gap-12">
      {subTags.map((subTagId) => {
        const subTagName = TAGS_SUB_REVERSE[subTagId];
        return (
          <SubTag
            key={subTagId}
            onClick={() => handleSubTag(subTagId)}
            name={subTagName}
            isClicked={selectedSubTag === subTagId}
            type="button"
          />
        );
      })}
    </div>
  );
}
