import { cn } from "@/lib/utils";
import Link from "next/link";
import { menuItems } from "./sidebar";

export default function SidebarItem({
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
        "box-border flex h-48 w-full items-center gap-8 rounded-71 px-12 py-12 font-medium text-coolGray-500",
        pathname === item.href
          ? "border border-cBlue-400 text-cBlue-400 shadow-[0px_2px_4px_1px_rgba(20,120,194,0.15)]"
          : "transparent",
      )}
    >
      <item.icon
        className={cn("text-cool", pathname === item.href && "text-cBlue-400")}
      />
      {item.label}
    </Link>
  );
}
