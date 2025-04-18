"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { menuItems } from "./sidebar";
import { usePathname } from "next/navigation";

export default function SidebarItem({ item }: { item: (typeof menuItems)[0] }) {
  const pathname = usePathname();
  return (
    <Link
      href={item.href}
      className={cn(
        "box-border flex h-48 w-full items-center gap-8 rounded-76 px-8 py-12 text-coolGray-500",
        pathname === item.href
          ? "border border-cBlue-400 text-cBlue-400 shadow-[0px_2px_4px_1px_rgba(20,120,194,0.15)]"
          : "transparent",
      )}
    >
      <div
        className={cn(
          "text-cool shrink-0",
          pathname === item.href && "text-cBlue-400",
        )}
      >
        {item.icon}
      </div>
      <span className="shrink-0 text-Type-16-medium">{item.label}</span>
    </Link>
  );
}
