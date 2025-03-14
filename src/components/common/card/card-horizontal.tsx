import ArrowRightIcon from "@/assets/icon/arrow_right.svg";
import Image from "next/image";
import Link from "next/link";

interface Props {
  img: string;
  title: string;
  content: string;
  tag: string;
  link: string;
}

function CardHorizontal({ img, title, content, tag, link }: Props) {
  return (
    <Link
      href={link}
      className="relative mb-32 h-170 w-full overflow-hidden rounded-20"
    >
      <div className="flex h-170 items-center">
        <Image
          src={img}
          alt={title}
          width={1000}
          height={236}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute top-0 flex h-full w-full flex-col justify-between bg-black bg-opacity-60 pb-24 pl-25 pr-24 pt-12 text-white">
        <header>
          <p className="mb-4 text-Type-28-bold">{title}</p>
          <p className="text-Type-20-medium">{content}</p>
        </header>

        <div className="flex justify-end">
          <div className="flex h-36 w-fit items-center justify-center gap-4 rounded-20 bg-[linear-gradient(86deg,_#39434A_-41.17%,_#279AF2_56.08%)] px-15 py-12 text-Type-16-bold">
            <span>{tag}</span>
            <ArrowRightIcon color="white" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardHorizontal;
