import { Input } from "../ui/input";
import { Search } from "lucide-react";

function Header() {
  return (
    <div className="flex items-center justify-between pb-[84px] pt-14">
      <header className="text-[35px] font-bold">
        쉽게 이미지를 만들고 나만의 상품을 제작해보세요!
      </header>
      <div className="flex items-center rounded-3xl bg-[#E1E1E1] px-6">
        <Search />
        <Input type="text" placeholder="무엇을 찾고 있나요?" />
      </div>
    </div>
  );
}

export default Header;
