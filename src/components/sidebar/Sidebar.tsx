import HomeIcon from "@/assets/icon/home.svg";
import CreateIcon from "@/assets/icon/create.svg";
import CreateVideoIcon from "@/assets/icon/create video.svg";
import MyActiveIcon from "@/assets/icon/folder.svg";
import SocialIcon from "@/assets/icon/activity.svg";
import PAGE_ROUTES from "@/constants/page-routes";
import DesktopSidebar from "./desktop/DesktopSidebar";
import MobileSidebar from "./mobile/MobileSidebar";
import SSEContainer from "../sse/SSEContainer";

// 메뉴 항목 타입
type MenuItem = {
  label: string;
  href: string;
  subHref?: string;
  icon: React.ReactNode;
};

// 상단 메뉴
export const MENU_ITEMS: Record<string, MenuItem> = {
  HOME: {
    label: "홈",
    href: PAGE_ROUTES.HOME,
    icon: <HomeIcon />,
  },
  IMAGE_CREATE: {
    label: "이미지 생성",
    href: PAGE_ROUTES.IMAGE_CREATE,
    icon: <CreateIcon />,
  },
  VIDEO_CREATE: {
    label: "영상 생성",
    href: PAGE_ROUTES.VIDEO_CREATE,
    icon: <CreateVideoIcon />,
  },
};

// 내 메뉴
export const MY_MENU_ITEMS: Record<string, MenuItem> = {
  ACTIVITY: {
    label: "내 활동",
    href: PAGE_ROUTES.MY_ACTIVITY_POST,
    subHref: PAGE_ROUTES.MY_ACTIVITY_LIKE,
    icon: <SocialIcon />,
  },
  PROJECT: {
    label: "내 프로젝트",
    href: PAGE_ROUTES.MY_PROJECT_ALL,
    subHref: PAGE_ROUTES.MY_PROJECT_FOLDER,
    icon: <MyActiveIcon />,
  },
};

export default function Sidebar() {
  return (
    <>
      <SSEContainer />
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
}
