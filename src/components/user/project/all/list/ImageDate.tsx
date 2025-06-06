import CheckboxCheckedIcon from "@/assets/my/checkbox_checked.svg";
import CheckboxIcon from "@/assets/my/checkbox.svg";

interface Props {
  date: string;
  editMode: boolean;
  allSelected: boolean;
  toggleAllForDate: () => void;
}

function ImageDate({ date, editMode, allSelected, toggleAllForDate }: Props) {
  return (
    <div className="mb-16 flex items-center gap-24">
      <h2 className="text-Type-18-medium text-gray-500">{date}</h2>
      {editMode && (
        <button onClick={toggleAllForDate}>
          {allSelected ? <CheckboxCheckedIcon /> : <CheckboxIcon />}
        </button>
      )}
    </div>
  );
}

export default ImageDate;
