import Image from "next/image";

function Hero() {
  return (
    <header className="relative mb-38 h-335 w-full">
      <div className="w-ful absolute z-10 h-full pl-40 pt-38 text-53 font-bold text-coolGray-800">
        <p>상상을 현실로,</p>
        <p>AI 애니메이션 호잇</p>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/main/hero1.webp"
          width={1900}
          height={335}
          alt="밤의 도시와 그 풍경을 보는 캐릭터들 일러스트"
          className="my-auto h-full w-full overflow-hidden rounded-20 object-cover"
        />
        <div className="to-black/1 absolute inset-0 bg-gradient-to-r from-[#F8F8F8] via-transparent" />
      </div>
    </header>
  );
}

export default Hero;
