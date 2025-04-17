import PAGE_ROUTES from "@/constants/page-routes";
import API_ROUTES from "./routes";
import SERVER_URL from "../client/baseUrl";

export const HTTP_ERROR_MESSAGE = {
  BAD_REQUEST: {
    BODY: "확인 후 다시 시도해주세요.",
    BUTTON: "홈으로 가기",
    REDIRECT_URL: PAGE_ROUTES.HOME,
  },
  METHOD_NOT_ALLOWED: {
    BODY: "다시 확인해주세요.",
    BUTTON: "홈으로 가기",
    REDIRECT_URL: PAGE_ROUTES.HOME,
  },
  INTERNAL_SERVER_ERROR: {
    BODY: "잠시 후 다시 시도해 주세요.",
    BUTTON: "홈으로 가기",
    REDIRECT_URL: PAGE_ROUTES.HOME,
  },
  UNAUTHORIZED: {
    BODY: "다시 로그인 해주세요.",
    BUTTON: "로그인하기",
    REDIRECT_URL: `${SERVER_URL}/${API_ROUTES.LOGIN}`,
  },
  FAILED_IN_AUTHENTICATION: {
    BODY: "다시 로그인 해주세요.",
    BUTTON: "로그인하기",
    REDIRECT_URL: `${SERVER_URL}/${API_ROUTES.LOGIN}`,
  },
  PAYMENT_REQUIRED: {
    HEADING: "크레딧 부족",
    BODY: "이미지를 생성하려면 크레딧을 충전해야 해요.",
    BUTTON: "크레딧 충전하기",
    REDIRECT_URL: "",
  },
} as const;
