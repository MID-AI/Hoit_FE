"use client";

import ImageInput from "@/components/common/card/image-input";
import Navigation from "@/components/create/navigation/navigation";
import NavigationSection from "@/components/create/navigation/navigation-section";
import { createImageAtom } from "@/stores/create-image-atom";
import { useAtom } from "jotai";
import ImageCreateNavigationSelect from "./image-create-navigation-select";

function ImageCreateNavigation() {
  const [state, setState] = useAtom(createImageAtom);
  const { ratio, reference, isOptionLocked } = state;

  const setReference = (
    key: "character" | "style",
    value: File | string | null,
    type: "file" | "url",
  ) => {
    setState((prev) => ({
      ...prev,
      reference: {
        ...prev.reference,
        [key]: type === "file" ? value : null,
        [`${key}Url`]: type === "url" ? value : null,
      },
    }));
  };

  const onClickReset = () => {
    setState((prev) => ({
      ...prev,
      ratio: "1:1",
      reference: {
        ...prev.reference,
        character: null,
        characterUrl: null,
        style: null,
        styleUrl: null,
      },
    }));
  };

  return (
    <Navigation onClickReset={onClickReset} disabled={isOptionLocked}>
      <NavigationSection
        title="이미지 비율"
        content={
          <ImageCreateNavigationSelect
            selectedValue={ratio}
            setSelectedValue={(value) =>
              setState((prev) => ({ ...prev, ratio: value }))
            }
            disabled={isOptionLocked}
          />
        }
      />
      <NavigationSection
        title="캐릭터"
        content={
          <ImageInput
            type="character"
            image={reference.character}
            disabled={isOptionLocked}
            setFile={(file) => setReference("character", file, "file")}
            setUrl={(url) => setReference("character", url, "url")}
          />
        }
      />
      <NavigationSection
        title="스타일"
        content={
          <ImageInput
            type="style"
            image={reference.style}
            disabled={isOptionLocked}
            setFile={(file) => setReference("style", file, "file")}
            setUrl={(url) => setReference("style", url, "url")}
          />
        }
      />
    </Navigation>
  );
}

export default ImageCreateNavigation;
