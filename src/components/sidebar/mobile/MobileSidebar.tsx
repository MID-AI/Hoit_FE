"use client";

import Link from "next/link";
import { useState } from "react";
import PAGE_ROUTES from "@/constants/page-routes";
import MenuIcon from "@/assets/icon/hamburger.svg";
import Logo from "@/assets/logo/mobile_logo.svg";
import { MENU_ITEMS, MY_MENU_ITEMS } from "../Sidebar";
import useGetUser from "@/hooks/user/auth/useGetUser";
import SidebarLogin from "../desktop/SidebarLogin";
import MobileSidebarLiItem from "./MobileSidebarLiItem";
import ProfileModal from "@/components/user/profile/ProfileModal";
import AuthModal from "@/components/user/auth/AuthModal";
import useLogout from "@/hooks/user/auth/useLogout";
import SidebarCredit from "../desktop/SidebarCredit";
import SidebarAlert from "../desktop/SidebarAlert";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(false);
  const [auth, setAuth] = useState(false);

  const { data, isLoading } = useGetUser();
  const { mutate: logout } = useLogout();

  const menuItems = [
    ...Object.values(MENU_ITEMS),
    ...Object.values(MY_MENU_ITEMS),
  ];

  if (isLoading) return null;

  return (
    <>
      <header className="bg-coolGrey-50 fixed left-0 right-0 top-0 z-50 h-64 bg-coolGray-50 md:hidden">
        <div className="flex h-full items-center justify-between px-16 pb-4 pt-4">
          <div className="flex items-center">
            <Link href={PAGE_ROUTES.HOME}>
              <Logo width={48} height={25} />
            </Link>
          </div>
          <div className="flex items-center">
            {data ? (
              <>
                <SidebarAlert />
                <SidebarCredit credit={String(data.credit)} />
              </>
            ) : (
              <SidebarLogin className="w-fit justify-end" />
            )}
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-center p-12"
            >
              <MenuIcon className="h-24 w-24 text-gray-800" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <>
          <div
            className="fixed inset-0 z-30 md:hidden"
            onClick={() => setOpen(false)}
          />
          <nav className="fixed left-0 right-0 top-64 z-40 bg-coolGray-50 p-8 shadow-md md:hidden">
            <ul className="flex flex-col divide-y">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center px-8 py-10 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-Type-18-medium text-gray-800">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
              {data && (
                <>
                  <MobileSidebarLiItem
                    text="프로필"
                    onClick={() => {
                      setOpen(false);
                      setProfile(true);
                    }}
                  />
                  <MobileSidebarLiItem
                    text="계정"
                    onClick={() => {
                      setOpen(false);
                      setAuth(true);
                    }}
                  />
                  <MobileSidebarLiItem
                    text="로그아웃"
                    onClick={() => logout()}
                  />
                </>
              )}
            </ul>
          </nav>
        </>
      )}
      {data && (
        <>
          <ProfileModal
            nickname={data.nickname}
            profileImage={data.profileImage}
            editOpen={profile}
            setEditOpen={setProfile}
          />
          <AuthModal
            credit={data.credit ?? 0}
            editOpen={auth}
            setEditOpen={setAuth}
          />
        </>
      )}
    </>
  );
}
