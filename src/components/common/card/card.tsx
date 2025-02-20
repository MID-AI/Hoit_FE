import Image from "next/image";
import Link from "next/link";

function Card({ id, img }: { id: number; img: string }) {
  return (
    <Link
      href={`image/${id}`}
      className="mb-17 flex max-h-[600px] w-full shrink-0 justify-center overflow-hidden rounded-22"
    >
      <Image
        src={img}
        alt="test"
        width={1000}
        height={800}
        className="object-cover transition-all duration-300 hover:scale-105"
      />
    </Link>
  );
}

export default Card;
