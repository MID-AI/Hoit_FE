import HomeIcon from "@/assets/icon/home.svg";
import CreateIcon from "@/assets/icon/create.svg";
import CreateVideoIcon from "@/assets/icon/create video.svg";
import MyActiveIcon from "@/assets/icon/folder.svg";
import SocialIcon from "@/assets/icon/activity.svg";
import Logo from "@/assets/logo/logo.svg";
import SidebarItem from "./sidebar-item";
import SidebarUser from "./sidebar-user";
import PAGE_ROUTES from "@/constants/page-routes";
import Link from "next/link";
import DataPrefetch from "../query/data-prefetch";
import { QUERY_KEY } from "@/constants/query-key";
import { getUserInfo } from "@/apis/services/user";

export const menuItems = [
  { icon: <HomeIcon />, label: "홈", href: "/" },
  {
    icon: <CreateIcon />,
    label: "이미지 생성",
    href: `${PAGE_ROUTES.IMAGE_CREATE}`,
  },
  {
    icon: <CreateVideoIcon />,
    label: "영상 생성",
    href: `${PAGE_ROUTES.VIDEO_CREATE}`,
  },
];

const myMenuItems = [
  {
    icon: <SocialIcon />,
    label: "내 활동",
    href: `${PAGE_ROUTES.MY_ACTIVITY_POST}`,
    sub_href: `${PAGE_ROUTES.MY_ACTIVITY_LIKE}`,
  },
  {
    icon: <MyActiveIcon />,
    label: "내 프로젝트",
    href: `${PAGE_ROUTES.MY_PROJECT_ALL}`,
    sub_href: `${PAGE_ROUTES.MY_PROJECT_FOLDER}`,
  },
];

export function Sidebar() {
  return (
    <>
      {/* Desktop sidebar */}
      <div className="fixed z-50 hidden h-screen w-140 flex-col justify-between bg-default px-7 pb-24 pt-21 lg:flex">
        <div className="flex flex-col items-center justify-center gap-49">
          <Link href="/">
            <Logo />
          </Link>

          <div className="flex w-full flex-col gap-12">
            {menuItems.map((item) => (
              <SidebarItem
                key={item.label}
                icon={item.icon}
                href={item.href}
                label={item.label}
              />
            ))}
            <div className="mx-8 h-1 w-full bg-coolGray-200" />
            {myMenuItems.map((item) => (
              <SidebarItem
                key={item.label}
                icon={item.icon}
                href={item.href}
                label={item.label}
                sub_href={item.sub_href}
              />
            ))}
          </div>
        </div>
        <DataPrefetch queryKey={QUERY_KEY.MY.PROFILE} queryFn={getUserInfo}>
          <SidebarUser />
        </DataPrefetch>
      </div>

      {/* Tablet sidebar */}
      {/* <div className="fixed z-50 flex h-screen w-64 flex-col items-center justify-between bg-default py-8 pb-32 pt-21 lg:hidden">
        <div className="flex flex-col items-center gap-49">
          <Link href="/">
            <LogoSm />
          </Link>

          <div className="flex flex-col gap-12">
            {menuItems.map((item) => (
              <SidebarItemIcon key={item.label} item={item} />
            ))}
            <div className="mx-8 h-1 w-full bg-coolGray-200" />
            {myMenuItems.map((item) => (
              <SidebarItemIcon key={item.label} item={item} />
            ))}
          </div>
        </div>
        <UserProfileFetcher>
          <SidebarUser icon />
        </UserProfileFetcher>
      </div> */}

      {/* Mobile footer menu */}
      {/* <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-[#EDEDED] bg-background md:hidden">
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
      </div> */}
    </>
  );
}
