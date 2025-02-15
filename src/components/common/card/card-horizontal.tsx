import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
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
      <Image
        src={img}
        alt={title}
        width={1000}
        height={800}
        className="aspect-[530/230] rounded-2xl"
      />
      <div className="absolute top-0 flex h-full flex-col justify-between p-6">
        <header className="text-3xl font-bold text-white">{title}</header>
        <Button className="rounded-xl bg-white text-black hover:bg-white">
          {tag} <MoveRight />
        </Button>
      </div>
    </Link>
  );
}

export default CardHorizontal;
