import PAGE_ROUTES from "@/constants/page-routes";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <section className="flex h-screen w-full flex-col items-start justify-center gap-30 px-12 md:px-64 lg:px-102">
      <h2 className="text-40 font-semibold text-blue-400">404 ERROR</h2>
      <div className="text-Type-24-medium text-coolGray-700">
        <div>죄송합니다. 페이지를 찾을 수 없습니다.</div>
        <div>존재하지 않는 주소를 입력하셨거나</div>
        <div>요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</div>
      </div>

      <Link
        href={PAGE_ROUTES.HOME}
        className="flex w-fit rounded-30 bg-[linear-gradient(86deg,_#39434A_-41.17%,_#279AF2_56.08%)] px-60 py-12 text-Type-24-bold text-white"
      >
        홈으로
      </Link>
    </section>
  );
}

export default NotFound;
