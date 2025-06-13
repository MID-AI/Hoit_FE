"use client";

import NavigationSection from "@/components/create/navigation/NavigationSection";
import NavigationWrapper from "@/components/create/navigation/NavigationWrapper";
import {
  videoLoadingAtom,
  videoModelAtom,
  videoRefAtom,
} from "@/stores/create-video-atom";
import { useAtom, useAtomValue } from "jotai";
import VideoCreateNavigationSelect from "./VideoCreateNavigationSelect";
import VideoRefInput from "./VideoRefInput";

function VideoCreateNavigation() {
  const [model, setModel] = useAtom(videoModelAtom);
  const [reference, setReferenceState] = useAtom(videoRefAtom);
  const isLoading = useAtomValue(videoLoadingAtom);

  const setReference = (value: File | string | null, type: "file" | "url") => {
    setReferenceState({
      ref: type === "file" ? (value as File) : null,
      refUrl: type === "url" ? (value as string) : null,
    });
  };

  const onClickReset = () => {
    setModel("I2V-01");
    setReferenceState({
      ref: null,
      refUrl: null,
    });
  };

  return (
    <NavigationWrapper onClickReset={onClickReset} disabled={isLoading}>
      <NavigationSection
        title="모델"
        content={
          <VideoCreateNavigationSelect
            selectedValue={model}
            setSelectedValue={(value) => setModel(value)}
            disabled={isLoading}
          />
        }
      />
      <NavigationSection
        title="참고 이미지 업로드"
        content={
          <VideoRefInput
            disabled={isLoading}
            reference={reference}
            setReference={(file) => setReference(file, "file")}
          />
        }
      />
    </NavigationWrapper>
  );
}

export default VideoCreateNavigation;
