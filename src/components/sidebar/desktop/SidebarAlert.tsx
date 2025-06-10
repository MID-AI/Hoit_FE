import BellIcon from "@/assets/icon/bell.svg";
import SidebarItem from "./SidebarItem";

function SidebarAlert({ userId }: { userId: number }) {
  return <SidebarItem icon={<BellIcon />} href={`/${userId}`} label="알림" />;
}

export default SidebarAlert;
