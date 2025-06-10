import CreditIcon from "@/assets/icon/credit.svg";
import SidebarItem from "./SidebarItem";

function SidebarCredit({ credit }: { credit?: string }) {
  if (!credit) return;
  return (
    <SidebarItem
      icon={<CreditIcon className="h-24 w-24 text-coolGray-500" />}
      href=""
      label={String(credit)}
    />
  );
}

export default SidebarCredit;
