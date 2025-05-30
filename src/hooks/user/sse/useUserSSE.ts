import { ImagePayload, Notification, VideoPayload } from "@/@types/sse";
import { SERVER_URL } from "@/apis/client/baseUrl";
import API_ROUTES from "@/apis/constants/routes";
import { QUERY_KEY } from "@/constants/query-key";
import { SSE_STATUS, SSE_TYPE, type SSEStatus } from "@/constants/sse-status";
import {
  createImageAtom,
  imageInformationAtom,
  imageLoadingAtom,
  imageProgressAtom,
} from "@/stores/create-image-atom";
import { createVideoAtom } from "@/stores/create-video-atom";
import { errorDialogAtom } from "@/stores/error-atom";
import handleErrorDialog from "@/utils/handleErrorDialog";
import { useQueryClient } from "@tanstack/react-query";
import { useSetAtom } from "jotai";
import { useEffect, useRef } from "react";

export default function useUserSSE(memberId?: number | null) {
  const queryClient = useQueryClient();
  const setImage = useSetAtom(createImageAtom);
  const setImageInfo = useSetAtom(imageInformationAtom);
  const setImageLoading = useSetAtom(imageLoadingAtom);
  const setImageProgress = useSetAtom(imageProgressAtom);
  const setVideo = useSetAtom(createVideoAtom);
  const setErrorDialog = useSetAtom(errorDialogAtom);

  const eventSourceRef = useRef<EventSource | null>(null);
  const reconnectTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isConnectingRef = useRef(false);
  const reconnectAttemptsRef = useRef(0);

  const MAX_RECONNECT = 5;

  useEffect(() => {
    if (typeof window === "undefined" || !memberId) return;

    const scheduleReconnect = () => {
      if (reconnectAttemptsRef.current >= MAX_RECONNECT) {
        handleErrorDialog("서버와의 재연결에 실패했습니다.", setErrorDialog);
        return;
      }

      reconnectTimerRef.current = setTimeout(() => {
        reconnectAttemptsRef.current += 1;
        connect();
      }, 3000);
    };

    const connect = () => {
      if (isConnectingRef.current) return;
      isConnectingRef.current = true;

      if (eventSourceRef.current) {
        eventSourceRef.current.close();
        eventSourceRef.current = null;
      }

      const url = `${SERVER_URL}${API_ROUTES.CREATE_IMAGE_SSE(memberId)}`;
      const es = new EventSource(url, { withCredentials: true });
      eventSourceRef.current = es;

      es.onopen = () => {
        isConnectingRef.current = false;
        reconnectAttemptsRef.current = 0;
      };

      es.onmessage = (event) => {
        try {
          const notification: Notification = JSON.parse(event.data);
          const { type, status, message, payload } = notification;

          if (type === SSE_TYPE.IMAGE) {
            handleImageEvent(
              payload as ImagePayload,
              status as SSEStatus,
              message,
            );
          } else if (type === SSE_TYPE.VIDEO) {
            handleVideoEvent(
              payload as VideoPayload,
              status as SSEStatus,
              message,
            );
          } else {
            console.warn("알 수 없는 SSE 타입:", type);
          }
        } catch (error) {
          console.error("SSE 처리 중 오류", error);
        }
      };

      es.onerror = (err) => {
        console.error("SSE 연결 오류", err);

        es.close();
        eventSourceRef.current = null;
        isConnectingRef.current = false;

        handleErrorDialog(
          "서버와의 연결이 끊어졌습니다. 3초 후 재연결합니다.",
          setErrorDialog,
        );

        scheduleReconnect();
      };
    };

    const handleImageEvent = (
      payload: ImagePayload,
      status: string,
      message?: string,
    ) => {
      if (status === SSE_STATUS.PENDING) {
        setImageLoading(true);
        setImageProgress(Number(payload.progress));
      } else if (status === SSE_STATUS.ERROR) {
        handleErrorDialog(
          message || "이미지 생성 중 오류가 발생했습니다.",
          setErrorDialog,
        );
        setImageLoading(true);
      } else if (
        status === SSE_STATUS.SUCCESS &&
        payload.imageUrl.length > 0 &&
        payload.imageUrl[0].startsWith("https://")
      ) {
        setImageLoading(false);
        setImage(payload.imageUrl);
        setImageInfo({
          isUpscaled: payload.isUpscaled,
          taskId: payload.taskId,
          imageIndex: payload.index,
        });
        setImageProgress(0);

        queryClient.invalidateQueries({ queryKey: QUERY_KEY.MY.PROJECT });
      }
    };

    const handleVideoEvent = (
      payload: VideoPayload,
      status: string,
      message?: string,
    ) => {
      if (status === SSE_STATUS.PENDING) {
        setVideo((prev) => ({ ...prev, isOptionLocked: true }));
      } else if (status === SSE_STATUS.ERROR) {
        handleErrorDialog(
          message || "비디오 생성 중 오류가 발생했습니다.",
          setErrorDialog,
        );
        setVideo((prev) => ({ ...prev, isOptionLocked: false }));
      } else if (
        status === SSE_STATUS.SUCCESS &&
        payload.videoUrl.length > 0 &&
        payload.videoUrl[0].startsWith("https://")
      ) {
        setVideo((prev) => ({
          ...prev,
          aiModel: payload.model,
          prompt: payload.prompt,
          isOptionLocked: false,
        }));
        queryClient.invalidateQueries({ queryKey: QUERY_KEY.MY.PROJECT });
      }
    };

    connect();

    return () => {
      eventSourceRef.current?.close();
      eventSourceRef.current = null;
      if (reconnectTimerRef.current !== null) {
        clearTimeout(reconnectTimerRef.current);
        reconnectTimerRef.current = null;
      }
    };
  }, [
    memberId,
    queryClient,
    setImage,
    setImageInfo,
    setImageLoading,
    setVideo,
    setErrorDialog,
    setImageProgress,
  ]);
}
