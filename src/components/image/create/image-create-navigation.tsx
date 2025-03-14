import ImageInput from "@/components/common/card/image-input";
import Navigation from "@/components/create/navigation/navigation";
import NavigationSection from "@/components/create/navigation/navigation-section";
import {
  selectedCharacterAtom,
  selectedRatioAtom,
  selectedStyleAtom,
} from "@/stores/create-image";
import { useAtom } from "jotai";
import ImageCreateNavigationSelect from "./image-create-navigation-select";

function ImageCreateNavigation() {
  const [ratio, setRatio] = useAtom(selectedRatioAtom);
  const [character, setCharacter] = useAtom(selectedCharacterAtom);
  const [style, setStyle] = useAtom(selectedStyleAtom);

  const onClickReset = () => {
    setRatio("1");
    setCharacter(null);
    setStyle(null);
  };

  return (
    <Navigation onClickReset={onClickReset}>
      <NavigationSection
        title="이미지 비율"
        content={
          <ImageCreateNavigationSelect
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
        content={<ImageInput type="style" image={style} setImage={setStyle} />}
      />
    </Navigation>
  );
}

export default ImageCreateNavigation;
