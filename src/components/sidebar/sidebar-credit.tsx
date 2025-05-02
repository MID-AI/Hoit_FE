import SidebarItem from "./sidebar-item";
import CreditIcon from "@/assets/icon/credit.svg";

function SidebarCredit({ credit }: { credit?: string }) {
  if (!credit) return;
  return <SidebarItem icon={<CreditIcon />} href="" label={String(credit)} />;
}

export default SidebarCredit;
