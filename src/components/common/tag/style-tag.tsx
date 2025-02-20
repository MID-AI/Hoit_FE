import cn from "@/utils/cn";
import Image from "next/image";

function StyleTag({
  name,
  img,
  isSelected,
}: {
  name: string;
  img: string;
  isSelected: boolean;
}) {
  return (
    <button
      className={cn(
        "flex h-46 items-center gap-10 rounded-20 border border-white bg-white py-8 pl-8 pr-10 shadow-[0_2px_9px_0_rgba(0,0,0,0.10)]",
        isSelected && "border border-cBlue-300 bg-cBlue-100",
      )}
    >
      <div className="flex h-32 w-32 overflow-hidden rounded-full">
        <Image
          src={img}
          alt={`${name} 예시 이미지`}
          width={58}
          height={58}
          aria-hidden
        />
      </div>
      <span className="flex pr-7">{name}</span>
    </button>
  );
}

export default StyleTag;
