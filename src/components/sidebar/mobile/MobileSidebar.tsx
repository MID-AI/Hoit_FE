"use client";

import Link from "next/link";
import { useState } from "react";
import PAGE_ROUTES from "@/constants/page-routes";
import BellIcon from "@/assets/icon/bell.svg";
import CreditIcon from "@/assets/icon/credit.svg";
import MenuIcon from "@/assets/icon/hamburger.svg";
import Logo from "@/assets/logo/mobile_logo.svg";
import { MENU_ITEMS, MY_MENU_ITEMS } from "../Sidebar";

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
      <header className="bg-coolGrey-50 fixed left-0 right-0 top-0 z-50 h-64 bg-coolGray-50 md:hidden">
        <div className="flex h-full items-center justify-between px-16 pb-4 pt-4">
          {/* 로고 */}
          <div className="flex items-center">
            <Link href={PAGE_ROUTES.HOME}>
              <Logo width={48} height={25} />
            </Link>
          </div>

          {/* 아이콘들 */}
          <div className="flex items-center space-x-13">
            <div className="flex items-center justify-center p-1">
              <BellIcon className="h-21 w-21 text-gray-600" />
            </div>
            <div className="flex items-center justify-center p-1">
              <CreditIcon className="h-21 w-21 text-gray-600" />
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-center p-1"
            >
              <MenuIcon className="h-17 w-16 text-gray-800" />
            </button>
          </div>
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
