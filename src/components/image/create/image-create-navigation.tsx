"use client";

import ImageInput from "@/components/common/card/image-input";
import Navigation from "@/components/create/navigation/navigation";
import NavigationSection from "@/components/create/navigation/navigation-section";
import {
  selectedCharacterAtom,
  selectedRatioAtom,
  selectedStyleAtom,
  setCharacterByFileAtom,
  setCharacterByUrlAtom,
  setStyleByFileAtom,
  setStyleByUrlAtom,
} from "@/stores/create-image-atom";
import { useAtom, useSetAtom } from "jotai";
import ImageCreateNavigationSelect from "./image-create-navigation-select";

function ImageCreateNavigation({ isLoading }: { isLoading: boolean }) {
  const [ratio, setRatio] = useAtom(selectedRatioAtom);
  const [character, setCharacter] = useAtom(selectedCharacterAtom);
  const [style, setStyle] = useAtom(selectedStyleAtom);

  const setCharacterByFile = useSetAtom(setCharacterByFileAtom);
  const setCharacterByUrl = useSetAtom(setCharacterByUrlAtom);
  const setStyleByFile = useSetAtom(setStyleByFileAtom);
  const setStyleByUrl = useSetAtom(setStyleByUrlAtom);

  const onClickReset = () => {
    setRatio("1:1");
    setCharacter(null);
    setStyle(null);
  };

  return (
    <Navigation onClickReset={onClickReset} disabled={isLoading}>
      <NavigationSection
        title="이미지 비율"
        content={
          <ImageCreateNavigationSelect
            selectedValue={ratio}
            setSelectedValue={setRatio}
            disabled={isLoading}
          />
        }
      />
      <NavigationSection
        title="캐릭터"
        content={
          <ImageInput
            type="character"
            image={character}
            disabled={isLoading}
            setFile={setCharacterByFile}
            setUrl={setCharacterByUrl}
          />
        }
      />
      <NavigationSection
        title="스타일"
        content={
          <ImageInput
            type="style"
            image={style}
            disabled={isLoading}
            setFile={setStyleByFile}
            setUrl={setStyleByUrl}
          />
        }
      />
    </Navigation>
  );
}

export default ImageCreateNavigation;
