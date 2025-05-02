import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import SiteIcon from "@/assets/create/global.svg";
import FolderIcon from "@/assets/create/folder_sm.svg";
import { modalTabVariant } from "@/style/button";
import NavigationImageListContainer from "./navigation-image-list-container";
import ModalButtons from "@/components/common/dialog/modal-buttons";

const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp"];

function NavigationModal({
  type,
  setFile,
  setUrl,
}: {
  type: string;
  setFile: (file: File | null) => void;
  setUrl: (url: string | null) => void;
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
    <DialogContent className="flex max-h-616 w-1236 flex-col items-center gap-40 px-38 pb-44 pt-26 text-coolGray-800">
      <DialogTitle>레퍼런스 업로드</DialogTitle>
      <DialogDescription className="sr-only">
        레퍼런스 이미지 업로드 방식을 선택해 주세요
      </DialogDescription>
      <div className="flex gap-36">
        <div className="flex w-full flex-col gap-12">
          <span className={modalTabVariant({ modalTab: "primary" })}>
            <SiteIcon />
            사이트에서
          </span>

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
        </div>
        <div>
          <NavigationImageListContainer
            onClick={(url: string) => setUrl(url)}
          />
          <ModalButtons />
        </div>
      </div>
    </DialogContent>
  );
}

export default NavigationModal;
