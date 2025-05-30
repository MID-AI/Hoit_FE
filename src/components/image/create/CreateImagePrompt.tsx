"use client";

import Prompt from "@/components/create/prompt/prompt";
import useCreateImage from "@/hooks/create/use-create-image";
import usePostImageRef from "@/hooks/create/use-post-image-ref";
import { imageLoadingAtom, imagePromptAtom } from "@/stores/create-image-atom";
import { useAtom, useAtomValue } from "jotai";

function CreateImagePrompt() {
  const [prompt, setPrompt] = useAtom(imagePromptAtom);
  const isLoading = useAtomValue(imageLoadingAtom);

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
      setPrompt={(value) => setPrompt(value)}
      placeholder={
        isLoading
          ? "이미지를 만들고 있어요! 잠시만 기다려주세요..."
          : "프롬프트 예시: 푸른 언덕 위에 있는 오두막, 그림책, 아크릴 물감 느낌, 화려한 색깔"
      }
      onClick={handleSubmit}
      isLoading={isLoading}
    />
  );
}

export default CreateImagePrompt;
