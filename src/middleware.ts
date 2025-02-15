import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import HTTPError from "@/apis/error/HTTPError";

const PUBLIC_PATHS = ["/login", "/"];

export const config = {
  matcher: [],
  // matcher: ["/img", "/mood"],
};
export function middleware(request: NextRequest) {
  try {
    // 공개 경로 체크
    if (PUBLIC_PATHS.includes(request.nextUrl.pathname)) {
      return NextResponse.next();
    }

    const token = request.cookies.get("_hoauth");

    if (!token) {
      const loginUrl = new URL("/login", request.url);
      // 현재 페이지 URL을 쿼리 파라미터로 저장 (로그인 후 돌아오기 위함)
      loginUrl.searchParams.set("from", request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }

    if (!request.headers.get("Authorization")) {
      throw new HTTPError(401, {
        message: "인증이 필요합니다.",
        payload: {
          HEADING: "인증 오류",
          BODY: "로그인이 필요한 서비스입니다.",
          BUTTON: "로그인하기",
        },
      });
    }
    // 모든 검사를 통과하면 다음 미들웨어나 라우트 핸들러로 진행
    return NextResponse.next();
  } catch (error) {
    if (error instanceof HTTPError) {
      return NextResponse.json(
        {
          error: error.information.payload,
          message: error.message,
        },
        { status: error.statusCode },
      );
    }

    return NextResponse.json(
      {
        error: {
          HEADING: "서버 오류",
          BODY: "서버 오류가 발생했습니다.",
          BUTTON: "다시 시도",
        },
      },
      { status: 500 },
    );
  }
}
