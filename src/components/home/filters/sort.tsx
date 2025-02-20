import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Sort() {
  return (
    <Select>
      <SelectTrigger className="h-36 w-76 rounded-12 border border-coolGray-400 bg-white px-9 py-7">
        <SelectValue placeholder="인기순" />
      </SelectTrigger>
      <SelectContent className="mt-7 rounded-12 border border-coolGray-400 bg-white px-13 py-11 shadow-none">
        <SelectGroup className="flex flex-col gap-12">
          <SelectItem value="likes">인기순</SelectItem>
          <SelectItem value="latest">최신순</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
