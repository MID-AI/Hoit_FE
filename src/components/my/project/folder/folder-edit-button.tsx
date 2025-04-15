import MoreIcon from "@/assets/my/more.svg";
import FolderEdit from "./folder-edit";
import { Popover, PopoverTrigger } from "@/components/ui/popover";

function FolderEditButton({
  folderId,
  folderName,
}: {
  folderId: number;
  folderName: string;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="px-10 py-5">
          <MoreIcon />
        </button>
      </PopoverTrigger>
      <FolderEdit folderId={folderId} folderName={folderName} />
    </Popover>
  );
}

export default FolderEditButton;
