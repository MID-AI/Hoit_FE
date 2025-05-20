import ArrowRightIcon from "@/assets/icon/arrow_right.svg";
import Link from "next/link";

function HeroButton({
  href,
  text,
  icon,
}: {
  href: string;
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="rounded-30 bg-gradient-to-r from-coolGray-700 via-cBlue-400 to-cBlue-400 p-1 shadow-custom"
    >
      <span className="flex items-center gap-3 rounded-30 bg-white px-14 py-9 text-Type-16-medium">
        {icon}
        {text}
        <ArrowRightIcon />
      </span>
    </Link>
  );
}

export default HeroButton;
