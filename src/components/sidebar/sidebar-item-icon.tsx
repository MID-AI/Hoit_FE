import { cn } from "@/lib/utils";
import Link from "next/link";
import { menuItems } from "./sidebar";

export default function SidebarItemIcon({
  item,
  pathname,
}: {
  item: (typeof menuItems)[0];
  pathname: string;
}) {
  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center justify-center rounded-full p-12 text-coolGray-500 shadow-[0px_2px_4px_1px_rgba(20,120,194,0.15)]",
        pathname === item.href && "border border-cBlue-400 text-cBlue-400",
      )}
    >
      <item.icon />
    </Link>
  );
}
