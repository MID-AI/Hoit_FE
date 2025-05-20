"use client";

import ImageRefInput from "@/components/image/create/ImageRefInput";
import NavigationSection from "@/components/create/navigation/NavigationSection";
import { createImageAtom } from "@/stores/create-image-atom";
import { useAtom } from "jotai";
import ImageCreateNavigationSelect from "./ImageCreateNavigationSelect";
import Navigation from "@/components/create/navigation/Navigation";

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
          <ImageRefInput
            type="character"
            disabled={isOptionLocked}
            reference={reference}
            setReference={setReference}
          />
        }
      />
      <NavigationSection
        title="스타일"
        content={
          <ImageRefInput
            type="style"
            disabled={isOptionLocked}
            reference={reference}
            setReference={setReference}
          />
        }
      />
    </Navigation>
  );
}

export default ImageCreateNavigation;
