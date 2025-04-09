import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import SiteIcon from "@/assets/create/global.svg";
import FolderIcon from "@/assets/create/folder_sm.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp"];

/**
 * 수정 예정
 * - 이미지 리스트
 * - 버튼 공통 컴포넌트로 변경
 * - css 정리
 */

function NavigationModal({
  type,
  setImage,
}: {
  type: string;
  setImage: (file: File | null) => void;
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
      setImage(file);
      document.getElementById("closeModal")?.click();
    }
    event.target.value = "";
  };

  return (
    <DialogContent className="flex h-640 w-1244 flex-col items-center gap-40 px-38 pb-44 pt-26 text-coolGray-800">
      <DialogTitle className="text-Type-28-bold">레퍼런스 업로드</DialogTitle>
      <DialogDescription className="flex gap-36">
        <span className="flex flex-col gap-12">
          <Button className="rounded-22 border border-coolGray-500 bg-coolGray-200 px-20 py-17 text-Type-20-bold">
            <SiteIcon />
            사이트에서
          </Button>

          <label
            htmlFor={type}
            className="flex cursor-pointer items-center gap-6 rounded-22 border border-coolGray-50 bg-coolGray-50 px-20 py-17 text-Type-20-bold"
          >
            <FolderIcon />
            <span className="shrink-0">컴퓨터에서</span>
          </label>
          <span>
            <input
              type="file"
              id={type}
              name="file"
              onChange={handleFileChange}
              className="hidden"
              accept="image/*"
            />
          </span>
        </span>
        <span>
          <span className="flex h-390 w-980 flex-wrap gap-10 overflow-y-auto">
            <Image
              src="https://picsum.photos/500/500"
              width={155}
              height={205}
              alt="이미지 예시"
              className="h-205 w-150 rounded-20"
            />
            <Image
              src="https://picsum.photos/500/800"
              width={155}
              height={205}
              alt="이미지 예시"
              className="h-205 w-150 rounded-20"
            />
            <Image
              src="https://picsum.photos/500/800"
              width={155}
              height={205}
              alt="이미지 예시"
              className="h-205 w-150 rounded-20"
            />
            <Image
              src="https://picsum.photos/500/800"
              width={155}
              height={205}
              alt="이미지 예시"
              className="h-205 w-150 rounded-20"
            />
            <Image
              src="https://picsum.photos/500/800"
              width={155}
              height={205}
              alt="이미지 예시"
              className="h-205 w-150 rounded-20"
            />
            <Image
              src="https://picsum.photos/500/800"
              width={155}
              height={205}
              alt="이미지 예시"
              className="h-205 w-150 rounded-20"
            />
            <Image
              src="https://picsum.photos/500/800"
              width={155}
              height={205}
              alt="이미지 예시"
              className="h-205 w-150 rounded-20"
            />
            <Image
              src="https://picsum.photos/500/800"
              width={155}
              height={205}
              alt="이미지 예시"
              className="h-205 w-150 rounded-20"
            />
            <Image
              src="https://picsum.photos/500/800"
              width={155}
              height={205}
              alt="이미지 예시"
              className="h-205 w-150 rounded-20"
            />
            <Image
              src="https://picsum.photos/500/800"
              width={155}
              height={205}
              alt="이미지 예시"
              className="h-205 w-150 rounded-20"
            />
            <Image
              src="https://picsum.photos/500/800"
              width={155}
              height={205}
              alt="이미지 예시"
              className="h-205 w-150 rounded-20"
            />
          </span>
          <span className="mt-26 flex items-center justify-end gap-34 text-Type-28-bold">
            <DialogClose id="closeModal">
              <Button variant="secondary">취소</Button>
            </DialogClose>
            <Button>확인</Button>
          </span>
        </span>
      </DialogDescription>
    </DialogContent>
  );
}

export default NavigationModal;
