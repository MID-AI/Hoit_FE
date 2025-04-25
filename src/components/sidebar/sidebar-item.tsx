"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  icon: React.ReactNode;
  label: string;
  href: string;
  sub_href?: string;
}

export default function SidebarItem({ icon, label, href, sub_href }: Props) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        "box-border flex h-48 w-full items-center gap-8 rounded-76 px-8 py-12 text-coolGray-500",
        pathname === href || pathname === sub_href
          ? "border border-cBlue-400 text-cBlue-400 shadow-[0px_2px_4px_1px_rgba(20,120,194,0.15)]"
          : "transparent",
      )}
    >
      <div
        className={cn(
          "text-cool shrink-0",
          (pathname === href || pathname === sub_href) && "text-cBlue-400",
        )}
      >
        {icon}
      </div>
      <span className="shrink-0 text-Type-16-medium">{label}</span>
    </Link>
  );
}
