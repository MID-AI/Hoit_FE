import Image from "next/image";

function Card({ img }: { img: string }) {
  return (
    <div className="mb-1 flex max-h-[600px] w-full shrink-0 justify-center overflow-hidden">
      <Image
        src={img}
        alt="test"
        width={1000}
        height={800}
        className="object-cover transition-all duration-300 hover:scale-105"
      />
    </div>
  );
}

export default Card;
