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
        "flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-[#CBF3D9] hover:text-accent-foreground",
        pathname === item.href
          ? "bg-[#CBF3D9] text-accent-foreground"
          : "transparent",
      )}
    >
      <item.icon className="mr-2 h-4 w-4" />
      {item.label}
    </Link>
  );
}
