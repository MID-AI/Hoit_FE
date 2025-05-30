import type { ErrorDialogType, HTTPErrorInfo } from "@/@types/error";
import { SetStateAction } from "jotai";

/**
 * API 에러를 모달로 반영하기 위한 함수
 * @param error
 * @param setErrorDialog 전역 에러 setter 함수
 * @throws 에러 모달
 */
export default function handleErrorDialog(
  error: HTTPErrorInfo | string | null,
  setErrorDialog: (value: SetStateAction<ErrorDialogType | null>) => void,
) {
  if (typeof error === "string") {
    setErrorDialog({
      isOpen: true,
      heading: "에러 발생",
      body: error,
      button: "확인",
    });
    return;
  }

  const payload = error?.payload;

  if (payload) {
    const { BODY, BUTTON, REDIRECT_URL, SERVER_MESSAGE } = payload;
    setErrorDialog({
      isOpen: true,
      heading: SERVER_MESSAGE,
      body: BODY,
      button: BUTTON,
      redirectUrl: REDIRECT_URL,
    });
  } else {
    setErrorDialog({
      isOpen: true,
      heading: "에러 발생",
      body: "알 수 없는 오류가 발생했습니다.",
      button: "확인",
    });
  }
}
