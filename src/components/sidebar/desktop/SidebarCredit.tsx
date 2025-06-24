import CreditIcon from "@/assets/icon/credit.svg";

function SidebarCredit({ credit }: { credit?: string }) {
  if (!credit) return;
  return (
    <div className="box-border flex h-48 w-48 items-center justify-center gap-8 rounded-76 p-12 text-coolGray-500 lg:w-full lg:justify-start lg:px-8">
      <div className="shrink-0">
        <CreditIcon className="h-24 w-24 text-coolGray-500" />
      </div>
      <span className="hidden shrink-0 text-Type-16-medium lg:flex">
        {credit}
      </span>
    </div>
  );
}

export default SidebarCredit;
