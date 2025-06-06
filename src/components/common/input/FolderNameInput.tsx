import { Input } from "@/components/ui/input";
import { FOLDER_NAME_MAX_LENGTH } from "@/constants/input-limits";

interface Props {
  folderName: string;
  handleInputChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleEnter?: () => void;
}

function FolderNameInput({
  folderName,
  handleInputChange,
  handleEnter,
}: Props) {
  return (
    <span className="relative">
      <Input
        placeholder="폴더 이름을 입력하세요"
        className="rounded-22 border-2 border-cBlue-400 px-28 py-22 placeholder:text-coolGray-300"
        value={folderName}
        maxLength={FOLDER_NAME_MAX_LENGTH}
        onInput={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter" && handleEnter) {
            e.preventDefault();
            handleEnter();
          }
        }}
      />
      <span className="absolute right-0 top-0 pr-34 pt-24 text-Type-20-bold text-coolGray-500">
        {folderName.length}/{FOLDER_NAME_MAX_LENGTH}
      </span>
    </span>
  );
}

export default FolderNameInput;
