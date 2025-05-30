import SidebarItem from "./SidebarItem";
import CreditIcon from "@/assets/icon/credit.svg";

function SidebarCredit({ credit }: { credit?: string }) {
  if (!credit) return;
  return <SidebarItem icon={<CreditIcon />} href="" label={String(credit)} />;
}

export default SidebarCredit;
