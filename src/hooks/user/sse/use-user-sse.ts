import { createImageAtom } from "@/stores/create-image-atom";
import { useQueryClient } from "@tanstack/react-query";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import API_ROUTES from "@/apis/constants/routes";
import { QUERY_KEY } from "@/constants/query-key";
import { SERVER_URL } from "@/apis/client/baseUrl";
import type { ImagePayload, Notification, VideoPayload } from "@/@types/sse";
import { createVideoAtom } from "@/stores/create-video-atom";

export default function useUserSSE(memberId?: number | null) {
  const queryClient = useQueryClient();
  const setImage = useSetAtom(createImageAtom);
  const setVideo = useSetAtom(createVideoAtom);

  useEffect(() => {
    if (typeof window === "undefined" || !memberId) return;

    const url = `${SERVER_URL}${API_ROUTES.CREATE_IMAGE_SSE(memberId)}`;
    const eventSource = new EventSource(url, {
      withCredentials: true,
    });

    eventSource.onmessage = async (event) => {
      try {
        const notification: Notification = JSON.parse(event.data);
        const { type, payload } = notification;

        switch (type) {
          case "image": {
            const { imageUrl, prompt, ratio } = payload as ImagePayload;

            if (imageUrl.length === 1 && imageUrl[0] === "processing") {
              setImage((prev) => ({ ...prev, isOptionLocked: true }));
              return;
            }

            if (imageUrl.length > 0 && imageUrl[0].startsWith("https://")) {
              setImage((prev) => ({
                ...prev,
                createdImages: imageUrl,
                prompt,
                ratio,
                isOptionLocked: false,
              }));
              queryClient.invalidateQueries({ queryKey: QUERY_KEY.MY.PROJECT });
            }
            break;
          }

          case "video": {
            const {
              videoUrl,
              prompt,
              model: aiModel,
            } = payload as VideoPayload;
            if (videoUrl.length === 1 && videoUrl[0] === "processing") {
              setVideo((prev) => ({ ...prev, isOptionLocked: true }));
              return;
            }
            if (videoUrl.length > 0 && videoUrl[0].startsWith("https://")) {
              setVideo((prev) => ({
                ...prev,
                aiModel,
                prompt,
                isOptionLocked: false,
              }));
              queryClient.invalidateQueries({ queryKey: QUERY_KEY.MY.PROJECT });
            }

            break;
          }

          // 알림 추가 전
          // case "alert": {
          //   setAlert((prev) => [...prev, notification]);
          //   break;
          // }

          default:
            console.warn("알 수 없는 SSE 타입:", type);
        }
      } catch (error) {
        console.error("SSE 처리 중 오류", error);
      }
    };

    return () => {
      eventSource.close();
    };
  }, [memberId, queryClient, setImage, setVideo]);
}
