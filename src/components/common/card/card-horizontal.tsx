import ArrowRightIcon from "@/assets/icon/arrow_right.svg";
import Image from "next/image";
import Link from "next/link";

function CardHorizontal({
  img,
  title,
  tag,
  link,
}: {
  img: string;
  title: string;
  tag: string;
  link: string;
}) {
  return (
    <Link href={link} className="relative">
      <div className="flex h-236 items-center overflow-hidden rounded-20">
        <Image
          src={img}
          alt={title}
          width={1000}
          height={236}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute top-0 flex h-full flex-col justify-between px-28 py-17">
        <header className="text-Type-28-bold text-white">{title}</header>
        <div className="flex h-36 w-fit items-center justify-center gap-4 rounded-20 bg-white px-15 py-12 text-Type-16-medium text-coolGray-800 hover:bg-white">
          <span>{tag}</span>
          <ArrowRightIcon />
        </div>
      </div>
    </Link>
  );
}

export default CardHorizontal;
