"use client";

import Prompt from "@/components/create/prompt/prompt";
import useCreateVideo from "@/hooks/create/useCreateVideo";
import usePostVideoRef from "@/hooks/create/usePostVideoRef";
import { videoLoadingAtom, videoPromptAtom } from "@/stores/create-video-atom";

import { useAtom, useAtomValue } from "jotai";

function CreateVideoPrompt() {
  const [prompt, setPrompt] = useAtom(videoPromptAtom);
  const isLoading = useAtomValue(videoLoadingAtom);
  const postRefImages = usePostVideoRef();
  const createImage = useCreateVideo();

  const handleSubmit = async () => {
    try {
      await postRefImages.postRefImages();
      await createImage.handleCreateVideo();
    } catch (error) {
      console.error("레퍼런스 업로드 혹은 이미지 생성 중 오류 발생", error);
    }
  };

  return (
    <Prompt
      prompt={prompt}
      setPrompt={(value) => setPrompt(value)}
      placeholder={
        isLoading
          ? "비디오를 생성하고 있어요! 잠시만 기다려주세요..."
          : "나만의 상상의 세계를 펼쳐보세요!"
      }
      onClick={handleSubmit}
      isLoading={isLoading}
    />
  );
}

export default CreateVideoPrompt;
