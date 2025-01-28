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
        "flex h-10 w-10 items-center justify-center rounded-md hover:bg-[#CBF3D9] hover:text-accent-foreground",
        pathname === item.href
          ? "bg-[#CBF3D9] text-accent-foreground"
          : "transparent",
      )}
    >
      <item.icon className="h-5 w-5" />
    </Link>
  );
}
