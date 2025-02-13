import * as Sentry from "@sentry/nextjs";
import { HTTP_STATUS_CODE, HTTP_ERROR_MESSAGE } from "../constants/https";
import HTTPError, { type HTTPErrorInfo } from "../error/HTTPError";

type StatusCodeRange = {
  min: number;
  max: number;
  defaultMessage: string;
  defaultPayload: HTTPErrorInfo["payload"];
};

// 상태 코드 범위별 기본 처리 설정
const STATUS_CODE_RANGES: StatusCodeRange[] = [
  {
    min: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
    max: 599,
    defaultMessage: "서버 오류가 발생했습니다.",
    defaultPayload: HTTP_ERROR_MESSAGE[HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR],
  },
  {
    min: HTTP_STATUS_CODE.BAD_REQUEST,
    max: 499,
    defaultMessage: "잘못된 요청입니다.",
    defaultPayload: HTTP_ERROR_MESSAGE[HTTP_STATUS_CODE.BAD_REQUEST],
  },
];

// 기본 에러 페이로드
const DEFAULT_ERROR_PAYLOAD: HTTPErrorInfo["payload"] = {
  HEADING: "알 수 없음",
  BODY: "오류가 발생했습니다.",
  BUTTON: "확인",
};

/**
 * API 에러를 처리하는 함수
 * @param responseStatus HTTP 상태 코드
 * @param message 사용자 정의 메시지 (선택사항)
 * @throws {HTTPError} 처리된 HTTP 에러
 */
const handleAPIError = (responseStatus: number, message?: string): never => {
  // 미리 정의된 에러 메시지가 있는지 확인
  const predefinedError =
    HTTP_ERROR_MESSAGE[responseStatus as keyof typeof HTTP_ERROR_MESSAGE];

  if (predefinedError) {
    throw createAndLogError(responseStatus, {
      message: message || `HTTP 오류: ${responseStatus}`,
      payload: predefinedError,
    });
  }

  // 상태 코드 범위별 처리
  const rangeError = STATUS_CODE_RANGES.find(
    (range) => responseStatus >= range.min && responseStatus <= range.max,
  );

  if (rangeError) {
    throw createAndLogError(responseStatus, {
      message: message || rangeError.defaultMessage,
      payload: rangeError.defaultPayload,
    });
  }

  // 기본 에러 처리
  throw createAndLogError(responseStatus, {
    message: message || "알 수 없는 오류입니다.",
    payload: DEFAULT_ERROR_PAYLOAD,
  });
};

/**
 * HTTP 에러를 생성하고 Sentry에 로깅
 */
const createAndLogError = (
  statusCode: number,
  errorInfo: HTTPErrorInfo,
): HTTPError => {
  const error = new HTTPError(statusCode, errorInfo);

  // 개발 환경에서만 콘솔에 출력
  if (process.env.NODE_ENV === "development") {
    console.error("[API Error]", {
      statusCode,
      message: errorInfo.message,
      payload: errorInfo.payload,
    });
  }

  // 프로덕션 환경에서만 Sentry에 로깅
  if (process.env.NODE_ENV === "production") {
    Sentry.captureException(error, {
      level: statusCode >= 500 ? "error" : "warning",
      tags: {
        statusCode,
        errorType: "API",
      },
    });
  }

  return error;
};

export default handleAPIError;
