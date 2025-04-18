import ToolbarEditButton from "../toolbar-edit-button";
import DownLoadIcon from "@/assets/my/download_gray.svg";

function ToolbarFolderMove() {
  const handleClick = () => {};
  return (
    <ToolbarEditButton
      icon={<DownLoadIcon />}
      text="폴더이동"
      onClick={handleClick}
    />
  );
}
export default ToolbarFolderMove;
