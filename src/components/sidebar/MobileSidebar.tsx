"use client";

import Link from "next/link";
import { useState } from "react";
// import PAGE_ROUTES from "@/constants/page-routes";
import BellIcon from "@/assets/icon/bell.svg";
import CreditIcon from "@/assets/icon/credit.svg";
import MenuIcon from "@/assets/icon/hamburger.svg";
import Logo from "@/assets/logo/mobile_logo.svg";
import { MENU_ITEMS, MY_MENU_ITEMS } from "./Sidebar";

// const menuItems = [
//   { label: "홈", href: PAGE_ROUTES.HOME },
//   { label: "이미지 생성", href: PAGE_ROUTES.IMAGE_CREATE },
//   { label: "영상 생성", href: PAGE_ROUTES.VIDEO_CREATE },
//   { label: "내 활동", href: PAGE_ROUTES.MY_ACTIVITY_POST },
//   { label: "내 프로젝트", href: PAGE_ROUTES.MY_PROJECT_ALL },
// ];

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  // 메뉴 통합
  const menuItems = [
    ...Object.values(MENU_ITEMS),
    ...Object.values(MY_MENU_ITEMS),
  ];

  return (
    <>
      {/* 상단 헤더 */}
      <header className="bg-coolGrey-50 fixed left-0 right-0 top-0 z-50 flex h-64 items-center justify-between bg-coolGray-50 px-4 md:hidden">
        <div className="ml-16 mt-15 flex items-center">
          <Link href="/">
            <Logo width={48} height={25} />
          </Link>
        </div>
        <div className="flex items-center space-x-14 pr-1">
          <div className="mt-23 flex items-center justify-center p-1">
            <BellIcon className="h-21 w-21 text-gray-600" />
          </div>
          <div className="mt-23 flex items-center justify-center p-1">
            <CreditIcon className="h-21 w-21 text-gray-600" />
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="mt-20 flex items-center justify-center p-1"
          >
            <MenuIcon className="h-17 w-16 translate-y-2 text-gray-800" />
          </button>
        </div>
      </header>
      {/* 햄버거 메뉴 열렸을 때 */}
      {open && (
        <nav className="fixed left-0 right-0 top-64 z-40 bg-white shadow-md md:hidden">
          <ul className="flex flex-col divide-y">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center px-4 py-3 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-sm text-gray-800">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
