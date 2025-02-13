import Image from "next/image";

function StyleTag({ name, img }: { name: string; img: string }) {
  return (
    <div className="flex items-center gap-5 rounded-3xl bg-white px-2 py-1.5">
      <div className="flex h-10 w-10 overflow-hidden rounded-full">
        <Image
          src={img}
          alt={`${name} 예시 이미지`}
          width={58}
          height={58}
          className=""
        />
      </div>
      <span className="flex pr-7">{name}</span>
    </div>
  );
}

export default StyleTag;
