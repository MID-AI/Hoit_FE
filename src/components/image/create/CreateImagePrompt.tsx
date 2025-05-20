"use client";

import Prompt from "@/components/create/prompt/prompt";
import useCreateImage from "@/hooks/create/use-create-image";
import usePostImageRef from "@/hooks/create/use-post-image-ref";
import { createImageAtom } from "@/stores/create-image-atom";
import { useAtom } from "jotai";

function CreateImagePrompt() {
  const [state, setState] = useAtom(createImageAtom);
  const { prompt, isOptionLocked } = state;

  const postRefImages = usePostImageRef();
  const createImage = useCreateImage();

  const handleSubmit = async () => {
    try {
      await postRefImages.postRefImages();
      await createImage.handleCreateImage();
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
          ? "이미지를 만들고 있어요! 잠시만 기다려주세요..."
          : "프롬프트 예시: 푸른 언덕 위에 있는 오두막, 그림책, 아크릴 물감 느낌, 화려한 색깔"
      }
      onClick={handleSubmit}
      isLoading={isOptionLocked}
    />
  );
}

export default CreateImagePrompt;
