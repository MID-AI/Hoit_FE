"use client";

// import Navigation from "@/components/create/navigation/navigation";
// import {
//   createVideoAtom,
//   resetCreateVideoAtom,
// } from "@/stores/create-video-atom";
// import { useAtom, useSetAtom } from "jotai";
// import VideoCreateNavigationSelect from "./video-create-navigation-select";
// import NavigationSection from "@/components/create/navigation/navigation-section";
// import ImageRefInput from "@/components/image/create/ImageRefInput";

function VideoCreateNavigation() {
  // const [state, setState] = useAtom(createVideoAtom);
  // const reset = useSetAtom(resetCreateVideoAtom);
  // const { aiModel, reference, isOptionLocked } = state;

  // const setReference = (value: File | string | null, type: "file" | "url") => {
  //   setState((prev) => ({
  //     ...prev,
  //     reference: {
  //       file: type === "file" ? (value as File) : null,
  //       url: type === "url" ? (value as string) : null,
  //     },
  //   }));
  // };

  return <div>수정작업 중</div>;

  // return (
  // <Navigation onClickReset={reset} disabled={isOptionLocked}>

  //  <NavigationSection
  //     title="모델"
  //     content={
  //       <VideoCreateNavigationSelect
  //         selectedValue={aiModel}
  //         setSelectedValue={(value) =>
  //           setState((prev) => ({ ...prev, aiModel: value }))
  //         }
  //         disabled={isOptionLocked}
  //       />
  //     }
  //   />
  //   <NavigationSection
  //     title="참고 이미지 업로드"
  //     content={
  //       <ImageRefInput
  //         type="imageRef"
  //         image={reference.file}
  //         disabled={isOptionLocked}
  //         setFile={(file) => setReference(file, "file")}
  //         setUrl={(url) => setReference(url, "url")}
  //       />
  //     }
  //   />
  // </Navigation>
  // );
}

export default VideoCreateNavigation;
