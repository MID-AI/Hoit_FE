"use client";

import {
  selectedRatioAtom,
  selectedCharacterAtom,
  selectedStyleAtom,
} from "@/stores/create-image";
import NavigationSection from "./navigation-section";
import NavigationSelect from "./navigation-select";
import { useAtom } from "jotai";
import ImageInput from "@/components/common/card/image-input";
import ResetIcon from "@/assets/create/reset.svg";

function Navigation() {
  const [ratio, setRatio] = useAtom(selectedRatioAtom);
  const [character, setCharacter] = useAtom(selectedCharacterAtom);
  const [style, setStyle] = useAtom(selectedStyleAtom);

  const onClickReset = () => {
    setRatio("1");
    setCharacter(null);
    setStyle(null);
  };

  return (
    <nav className="flex w-278 flex-col items-center rounded-22 border border-coolGray-300 bg-white px-12 py-32 text-cBlack">
      <div className="flex flex-col gap-32">
        <NavigationSection
          title="이미지 비율"
          content={
            <NavigationSelect
              selectedValue={ratio}
              setSelectedValue={setRatio}
            />
          }
        />
        <NavigationSection
          title="캐릭터"
          content={
            <ImageInput
              type="character"
              image={character}
              setImage={setCharacter}
            />
          }
        />
        <NavigationSection
          title="스타일"
          content={
            <ImageInput type="style" image={style} setImage={setStyle} />
          }
        />
      </div>

      <button
        onClick={onClickReset}
        className="mt-36 flex w-72 items-center gap-8 rounded-20 border border-coolGray-50 bg-coolGray-50 px-8 py-6 hover:border-coolGray-400 hover:bg-coolGray-200 hover:shadow-custom"
      >
        <ResetIcon />
        <span className="shrink-0 text-Type-12-regular">리셋</span>
      </button>
    </nav>
  );
}

export default Navigation;
