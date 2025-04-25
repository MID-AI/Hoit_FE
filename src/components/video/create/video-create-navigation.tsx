"use client";

import Navigation from "@/components/create/navigation/navigation";
import {
  selectedAiModelAtom,
  selectedRefImageAtom,
} from "@/stores/create-video-atom";
import { useAtom } from "jotai";
import VideoCreateNavigationSelect from "./video-create-navigation-select";
import NavigationSection from "@/components/create/navigation/navigation-section";
import ImageInput from "@/components/common/card/image-input";

function VideoCreateNavigation({ isLoading }: { isLoading: boolean }) {
  const [aiModel, setAiModel] = useAtom(selectedAiModelAtom);
  const [refImage, setRefImage] = useAtom(selectedRefImageAtom);

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
            setImage={setRefImage}
            disabled={isLoading}
          />
        }
      />
    </Navigation>
  );
}

export default VideoCreateNavigation;
