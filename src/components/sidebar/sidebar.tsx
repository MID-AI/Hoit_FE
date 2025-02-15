"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, History, Pencil, Image } from "lucide-react";

import { cn } from "@/lib/utils";

import SidebarItem from "./sidebar-item";
import SidebarItemIcon from "./sidebar-item-icon";
import SidebarUser from "./sidebar-user";
import PAGE_ROUTES from "@/constants/page-routes";

export const menuItems = [
  { icon: Home, label: "홈", href: "/" },
  { icon: Image, label: "생성하기", href: `${PAGE_ROUTES.IMAGE_CREATE}` },
  { icon: Pencil, label: "편집하기", href: "/edit" },
  { icon: History, label: "히스토리", href: `${PAGE_ROUTES.HISTORY}` },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop sidebar */}
      <div className="fixed hidden h-screen w-[200px] flex-col justify-between lg:flex">
        <div className="py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Hoit
            </h2>
            <div className="space-y-1">
              {menuItems.map((item) => (
                <SidebarItem key={item.label} item={item} pathname={pathname} />
              ))}
            </div>
          </div>
        </div>
        <div className="px-3 py-4">
          <SidebarUser />
        </div>
      </div>

      {/* Tablet sidebar */}
      <div className="fixed hidden h-screen w-16 flex-col justify-between md:flex lg:hidden">
        <div className="py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              H
            </h2>
            <div className="space-y-1">
              {menuItems.map((item) => (
                <SidebarItemIcon
                  key={item.label}
                  item={item}
                  pathname={pathname}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="px-3 py-4">
          <SidebarUser icon />
        </div>
      </div>

      {/* Mobile footer menu */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-[#EDEDED] bg-background md:hidden">
        <nav className="flex h-16 items-center justify-around">
          {[...menuItems].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex flex-col items-center space-y-1 text-muted-foreground hover:text-primary",
                pathname === item.href && "text-primary",
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs">{item.label}</span>
            </Link>
          ))}
          <SidebarUser mobile />
        </nav>
      </div>
    </>
  );
}
