import ToolbarEditButton from "../../toolbar/ToolbarEditButton";
import MoveFolderIcon from "@/assets/my/move_folder.svg";

function ToolbarFolderMove() {
  const handleClick = () => {};
  return (
    <ToolbarEditButton
      icon={<MoveFolderIcon />}
      text="폴더이동"
      onClick={handleClick}
    />
  );
}
export default ToolbarFolderMove;
