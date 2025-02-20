import { Input } from "../ui/input";
import SearchIcon from "@/assets/icon/find.svg";

function Header() {
  return (
    <div className="mb-26 flex items-center justify-between">
      <header className="text-Type-28-bold text-coolGray-700">
        쉽게 이미지를 만들고 나만의 상품을 제작해보세요!
      </header>
      <div className="box-border flex w-578 items-center gap-8 rounded-20 border border-coolGray-200 bg-white px-12 py-8">
        <SearchIcon className="text-coolGray-500" />
        <Input
          type="text"
          placeholder="무엇을 찾고 있나요?"
          className="text-typ h-full"
        />
      </div>
    </div>
  );
}

export default Header;
