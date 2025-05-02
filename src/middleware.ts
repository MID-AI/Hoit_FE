import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_PATHS = [
  "/",
  "/create/image",
  "/create/video",
  "/login",
  "/media",
];

export const config = {
  matcher: ["/((?!_next/|api|favicon.ico).*)"],
};

// 인증 여부 확인
const isAuthenticated = (request: NextRequest) => {
  const token = request.cookies.get("_hoauth");
  return !!token;
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 공개 경로는 인증 없이 접근 허용
  if (
    pathname === "/" ||
    PUBLIC_PATHS.some((path) => path !== "/" && pathname.startsWith(path))
  ) {
    return NextResponse.next();
  }

  // 인증되지 않은 경우 로그인 페이지로 리디렉트
  if (!isAuthenticated(request)) {
    const redirectUrl = new URL("/login", request.url);
    redirectUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}
