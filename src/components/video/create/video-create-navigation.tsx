"use client";

import Navigation from "@/components/create/navigation/navigation";
import {
  selectedAiModelAtom,
  selectedRefImageAtom,
  setRefByFileAtom,
  setRefByUrlAtom,
} from "@/stores/create-video-atom";
import { useAtom, useSetAtom } from "jotai";
import VideoCreateNavigationSelect from "./video-create-navigation-select";
import NavigationSection from "@/components/create/navigation/navigation-section";
import ImageInput from "@/components/common/card/image-input";

function VideoCreateNavigation({ isLoading }: { isLoading: boolean }) {
  const [aiModel, setAiModel] = useAtom(selectedAiModelAtom);
  const [refImage, setRefImage] = useAtom(selectedRefImageAtom);
  const setRefByFile = useSetAtom(setRefByFileAtom);
  const setRefByUrl = useSetAtom(setRefByUrlAtom);

  const onClickReset = () => {
    setAiModel("1");
    setRefImage(null);
  };

  return (
    <Navigation onClickReset={onClickReset} disabled={isLoading}>
      <NavigationSection
        title="모델"
        content={
          <VideoCreateNavigationSelect
            selectedValue={aiModel}
            setSelectedValue={setAiModel}
            disabled={isLoading}
          />
        }
      />
      <NavigationSection
        title="참고 이미지 업로드"
        content={
          <ImageInput
            type="imageRef"
            image={refImage}
            disabled={isLoading}
            setFile={setRefByFile}
            setUrl={setRefByUrl}
          />
        }
      />
    </Navigation>
  );
}

export default VideoCreateNavigation;
