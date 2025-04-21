"use client";

import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import GoogleLogo from "@/assets/logo/googleLogo.svg";
import Image from "next/image";
import { BASE_URL } from "@/apis/client/APIClient";
import API_ROUTES from "@/apis/constants/routes";
import { usePathname } from "next/navigation";
import { CLIENT_URL } from "@/apis/client/baseUrl";

function LoginModal() {
  const pathname = usePathname();
  const uri = pathname === "/" ? "" : `?redirect_uri=${CLIENT_URL}${pathname}`;

  return (
    <DialogContent className="px-38 py-44">
      <DialogTitle className="sr-only">구글 로그인</DialogTitle>
      <DialogDescription className="flex gap-95">
        <span className="h-347 w-261">
          <Image
            src="/login/login.png"
            width={261}
            height={347}
            alt="아름다운 풍경 일러스트 이미지"
            className="rounded-20"
          />
        </span>
        <span className="mt-45 flex flex-col items-center">
          <Image
            src="/logo.svg"
            width={67}
            height={35}
            alt="로고"
            className="mb-43"
          />
          <span className="mb-24 shrink-0 text-nowrap text-Type-20-medium text-coolGray-500">
            로그인 후 나만의 이미지를 만들어 보세요!
          </span>
          <a
            href={`${BASE_URL}/${API_ROUTES.LOGIN}${uri}`}
            rel="noopener noreferrer"
            className="flex w-414 items-center gap-33 rounded-50 border border-coolGray-300 bg-coolGray-50 px-92 py-15 hover:border-blue-400 hover:bg-blue-50"
          >
            <GoogleLogo />
            <span className="text-Type-20-medium">구글로 로그인하기</span>
          </a>
        </span>
      </DialogDescription>
    </DialogContent>
  );
}

export default LoginModal;
