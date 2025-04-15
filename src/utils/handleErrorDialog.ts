import type { ErrorDialogType, HTTPErrorInfo } from "@/@types/error";
import { SetStateAction } from "jotai";

export default function handleErrorDialog(
  error: HTTPErrorInfo,
  setErrorDialog: (value: SetStateAction<ErrorDialogType | null>) => void,
) {
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
