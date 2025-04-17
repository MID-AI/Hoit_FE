import { Popover, PopoverTrigger } from "@/components/ui/popover";
import MoreIcon from "@/assets/my/more.svg";
import FolderEditButton from "./folder-edit-button";

function FolderEdit({
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
      <FolderEditButton folderId={folderId} folderName={folderName} />
    </Popover>
  );
}

export default FolderEdit;
