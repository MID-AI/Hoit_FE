import * as Sentry from "@sentry/nextjs";
import HTTPError, { type HTTPErrorInfo } from "../error/HTTPError";
import { HTTP_ERROR_MESSAGE } from "../constants/https";

/**
 * API 에러를 처리하는 함수
 * @param responseStatus HTTP 상태 코드
 * @param message 사용자 정의 메시지 (선택사항)
 * @throws {HTTPError} 처리된 HTTP 에러
 */
const handleAPIError = (
  statusCode: number,
  message?: string,
  errorCode?: keyof typeof HTTP_ERROR_MESSAGE,
): never => {
  const fallback = {
    BODY: "오류가 발생했습니다.",
    BUTTON: "확인",
    REDIRECT_URL: "/",
  };

  const uiPayload = errorCode
    ? (HTTP_ERROR_MESSAGE[errorCode] ?? fallback)
    : fallback;

  // 기본 에러 처리
  throw createAndLogError({
    statusCode,
    payload: {
      ...uiPayload,
      SERVER_MESSAGE: message ?? uiPayload.BODY,
    },
  });
};

/**
 * HTTP 에러를 생성하고 Sentry에 로깅
 */
const createAndLogError = (errorInfo: HTTPErrorInfo): HTTPError => {
  const error = new HTTPError(errorInfo);

  // 개발 환경에서만 콘솔에 출력
  if (process.env.NODE_ENV === "development") {
    console.error("[API Error]", {
      status: errorInfo.statusCode,
      message: errorInfo.payload.SERVER_MESSAGE,
      payload: errorInfo.payload,
    });
  }

  // 프로덕션 환경에서만 Sentry에 로깅
  if (process.env.NODE_ENV === "production") {
    Sentry.captureException(error, {
      level: errorInfo.statusCode >= 500 ? "error" : "warning",
      tags: {
        status: errorInfo.statusCode,
        errorType: "API",
      },
    });
  }

  return error;
};

export default handleAPIError;
