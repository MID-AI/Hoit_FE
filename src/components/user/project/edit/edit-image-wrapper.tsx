import cn from "@/utils/cn";
import CheckboxCheckedIcon from "@/assets/my/checkbox_checked.svg";
import CheckboxIcon from "@/assets/my/checkbox.svg";

function EditImageWrapper({
  editMode,
  isChecked,
  onClick,
  children,
}: {
  editMode?: boolean;
  isChecked?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      onClick={editMode ? onClick : undefined}
      className={cn(
        "relative mb-24 box-border cursor-pointer overflow-hidden rounded-20",
        editMode && isChecked && "outline outline-4 outline-cBlue-400",
      )}
    >
      {editMode && (
        <span className="absolute left-24 top-24 z-10">
          {isChecked ? <CheckboxCheckedIcon /> : <CheckboxIcon />}
        </span>
      )}
      <span className="pointer-events-none">{children}</span>
    </div>
  );
}

export default EditImageWrapper;
