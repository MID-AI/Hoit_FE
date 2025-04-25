"use client";

import ImageInput from "@/components/common/card/image-input";
import Navigation from "@/components/create/navigation/navigation";
import NavigationSection from "@/components/create/navigation/navigation-section";
import {
  selectedCharacterAtom,
  selectedRatioAtom,
  selectedStyleAtom,
} from "@/stores/create-image-atom";
import { useAtom } from "jotai";
import ImageCreateNavigationSelect from "./image-create-navigation-select";

function ImageCreateNavigation({ isLoading }: { isLoading: boolean }) {
  const [ratio, setRatio] = useAtom(selectedRatioAtom);
  const [character, setCharacter] = useAtom(selectedCharacterAtom);
  const [style, setStyle] = useAtom(selectedStyleAtom);

  const onClickReset = () => {
    setRatio("1");
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
            setImage={setCharacter}
            disabled={isLoading}
          />
        }
      />
      <NavigationSection
        title="스타일"
        content={
          <ImageInput
            type="style"
            image={style}
            setImage={setStyle}
            disabled={isLoading}
          />
        }
      />
    </Navigation>
  );
}

export default ImageCreateNavigation;
