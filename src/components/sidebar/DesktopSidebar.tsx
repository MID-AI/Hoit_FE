import Link from "next/link";
import SidebarItem from "./SidebarItem";
import Logo from "@/assets/logo/logo.svg";
import LogoSm from "@/assets/logo/logo_sm.svg";
import SidebarUser from "./SidebarUser";
import { MENU_ITEMS, MY_MENU_ITEMS } from "./Sidebar";

function DesktopSidebar() {
  return (
    <div className="fixed z-50 hidden h-screen w-64 flex-col justify-between bg-default py-8 pb-24 pl-8 pr-10 pt-32 md:flex lg:w-140 lg:pl-7 lg:pt-26">
      <div className="flex flex-col items-center justify-center gap-49">
        <Link href="/" className="hidden lg:flex">
          <Logo />
        </Link>
        <Link href="/" className="hidden md:flex lg:hidden">
          <LogoSm />
        </Link>

        <div className="flex w-full flex-col gap-12">
          {Object.values(MENU_ITEMS).map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              href={item.href}
              label={item.label}
            />
          ))}
          <span className="mx-8 h-1 w-24 self-center bg-coolGray-200 lg:w-full" />
          {Object.values(MY_MENU_ITEMS).map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              href={item.href}
              label={item.label}
              sub_href={item.subHref}
            />
          ))}
        </div>
      </div>
      <SidebarUser />
    </div>
  );
}

export default DesktopSidebar;
