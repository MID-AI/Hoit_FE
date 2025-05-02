import {
  createdImageAtom,
  promptAtom,
  selectedRatioAtom,
} from "@/stores/create-image-atom";
import { useQueryClient } from "@tanstack/react-query";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import API_ROUTES from "@/apis/constants/routes";
import { QUERY_KEY } from "@/constants/query-key";
import { SERVER_URL } from "@/apis/client/baseUrl";

function useImageCreationSSE(memberId?: number) {
  const queryClient = useQueryClient();
  const setCreatedImage = useSetAtom(createdImageAtom);
  const setSelectedRatio = useSetAtom(selectedRatioAtom);
  const setPrompt = useSetAtom(promptAtom);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!memberId) return;

    const url = `${SERVER_URL}${API_ROUTES.CREATE_IMAGE_SSE(memberId)}`;
    const eventSource = new EventSource(url, {
      withCredentials: true,
    });
    eventSource.onmessage = async (event) => {
      try {
        const data = JSON.parse(event.data);

        // 처리 중
        if (
          Array.isArray(data.imageUrls) &&
          data.imageUrls.length === 1 &&
          data.imageUrls[0] === "processing"
        ) {
          return;
        }

        // 이미지 생성 중
        if (
          Array.isArray(data.imageUrls) &&
          data.imageUrls.length === 1 &&
          data.imageUrls[0] === "processing"
        ) {
          return;
        }

        // 이미지 생성 완료
        if (
          Array.isArray(data.imageUrls) &&
          data.imageUrls.length > 0 &&
          data.imageUrls[0].startsWith("https://")
        ) {
          const { imageUrls, prompt, ratio } = data;
          setCreatedImage(imageUrls);
          setSelectedRatio(ratio);
          setPrompt(prompt);

          queryClient.invalidateQueries({ queryKey: QUERY_KEY.MY.PROJECT });
        }
      } catch (error) {
        console.error("SSE 처리 중 오류", error);
      }
    };

    return () => {
      eventSource.close();
    };
  }, [memberId, queryClient, setCreatedImage, setSelectedRatio, setPrompt]);
}

export default useImageCreationSSE;
