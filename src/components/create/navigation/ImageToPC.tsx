import FolderIcon from "@/assets/create/folder_sm.svg";
import { modalTabVariant } from "@/style/button";

const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp"];

function ImageToPC({
  type,
  setFile,
}: {
  type: string;
  setFile: (file: File | null) => void;
}) {
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        console.warn("파일 타입 에러");
        return;
      }
      setFile(file);
      document.getElementById("closeModal")?.click();
    }
    event.target.value = "";
  };

  return (
    <>
      <label htmlFor={type} className={modalTabVariant()}>
        <FolderIcon />
        컴퓨터에서
      </label>
      <div>
        <input
          type="file"
          id={type}
          name="file"
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
        />
      </div>
    </>
  );
}

export default ImageToPC;
