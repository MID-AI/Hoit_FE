"use client";

import NavigationSection from "@/components/create/navigation/NavigationSection";
import NavigationWrapper from "@/components/create/navigation/NavigationWrapper";
import { videoLoadingAtom, videoRefAtom } from "@/stores/create-video-atom";
import { useAtom, useAtomValue } from "jotai";
import VideoRefInput from "./VideoRefInput";

function VideoCreateNavigation() {
  const [reference, setReferenceState] = useAtom(videoRefAtom);
  const isLoading = useAtomValue(videoLoadingAtom);

  const setReference = (value: File | null) => {
    setReferenceState({
      ref: value,
      refUrl: null,
    });
  };

  const onClickReset = () => {
    setReferenceState({
      ref: null,
      refUrl: null,
    });
  };

  return (
    <NavigationWrapper onClickReset={onClickReset} disabled={isLoading}>
      <NavigationSection
        title="참고 이미지 업로드"
        content={
          <VideoRefInput
            disabled={isLoading}
            reference={reference}
            setReference={(file) => setReference(file)}
          />
        }
      />
    </NavigationWrapper>
  );
}

export default VideoCreateNavigation;
