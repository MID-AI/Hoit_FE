import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_PATHS = ["/"];

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

// 인증 여부 확인
const isAuthenticated = (request: NextRequest) => {
  const token = request.cookies.get("_hoauth");
  return !!token;
};

export async function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.includes("/api/") ||
    request.nextUrl.pathname.match(/\.(ico|png|svg|jpg|jpeg|gif)$/)
  ) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // 공개된 경로는 인증 없이 접근 가능
  if (PUBLIC_PATHS.includes(pathname)) {
    return NextResponse.next();
  }
  const response = NextResponse.next();

  // 로그인 검증
  if (!isAuthenticated(request)) {
    response.headers.set("X-Auth-Required", "true");
  } else {
    response.headers.set("X-Auth-Required", "false");
  }

  return response;
}
