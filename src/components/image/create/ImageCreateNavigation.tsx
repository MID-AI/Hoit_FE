"use client";

import ImageRefInput from "@/components/image/create/ImageRefInput";
import NavigationSection from "@/components/create/navigation/NavigationSection";
import {
  imageLoadingAtom,
  imageRatioAtom,
  imageRefAtom,
} from "@/stores/create-image-atom";
import { useAtom, useAtomValue } from "jotai";
import ImageCreateNavigationSelect from "./ImageCreateNavigationSelect";
import NavigationWrapper from "@/components/create/navigation/NavigationWrapper";

function ImageCreateNavigation() {
  const [ratio, setRatio] = useAtom(imageRatioAtom);
  const [reference, setReferenceState] = useAtom(imageRefAtom);
  const isLoading = useAtomValue(imageLoadingAtom);

  const setReference = (
    key: "character" | "style",
    value: File | string | null,
    type: "file" | "url",
  ) => {
    setReferenceState((prev) => ({
      ...prev,
      [key]: type === "file" ? value : null,
      [`${key}Url`]: type === "url" ? value : null,
    }));
  };

  const onClickReset = () => {
    setRatio("1:1");
    setReferenceState({
      character: null,
      characterUrl: null,
      style: null,
      styleUrl: null,
    });
  };

  return (
    <NavigationWrapper onClickReset={onClickReset} disabled={isLoading}>
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
          <ImageRefInput
            type="character"
            disabled={isLoading}
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
            disabled={isLoading}
            reference={reference}
            setReference={setReference}
          />
        }
      />
    </NavigationWrapper>
  );
}

export default ImageCreateNavigation;
