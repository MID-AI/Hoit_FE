import CreditIcon from "@/assets/icon/credit.svg";
import SidebarItem from "./SidebarItem";

function SidebarCredit({ credit }: { credit?: string }) {
  if (!credit) return;
  return <SidebarItem icon={<CreditIcon />} href="" label={String(credit)} />;
}

export default SidebarCredit;
