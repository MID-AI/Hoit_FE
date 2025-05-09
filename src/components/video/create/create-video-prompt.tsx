"use client";

import Prompt from "@/components/create/prompt/prompt";
import useCreateVideo from "@/hooks/create/use-create-video";
import usePostVideoRef from "@/hooks/create/use-post-video-ref";
import { createVideoAtom } from "@/stores/create-video-atom";

import { useAtom } from "jotai";

function CreateVideoPrompt() {
  const [state, setState] = useAtom(createVideoAtom);
  const { prompt, isOptionLocked } = state;
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
      setPrompt={(value) => setState((prev) => ({ ...prev, prompt: value }))}
      placeholder={
        isOptionLocked
          ? "비디오를 생성하고 있어요! 잠시만 기다려주세요..."
          : "나만의 상상의 세계를 펼쳐보세요!"
      }
      onClick={handleSubmit}
      isLoading={isOptionLocked}
    />
  );
}

export default CreateVideoPrompt;
