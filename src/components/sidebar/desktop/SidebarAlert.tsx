import BellIcon from "@/assets/icon/bell.svg";
import SidebarItem from "./SidebarItem";

function SidebarAlert({ userId }: { userId: number }) {
  return (
    <SidebarItem
      icon={<BellIcon className="h-24 w-24 text-coolGray-500" />}
      href={`/${userId}`}
      label="알림"
    />
  );
}

export default SidebarAlert;
