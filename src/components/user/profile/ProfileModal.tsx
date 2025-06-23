"use client";

import Image from "next/image";

import { Pen } from "lucide-react";
import {
  IMAGE_ALLOWED_FILE_TYPES,
  NICKNAME_MAX_LENGTH,
} from "@/constants/input-limits";
import { useState } from "react";

import useUpdateProfile from "@/hooks/user/auth/useUpdateProfile";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  nickname: string;
  profileImage: string;
  editOpen: boolean;
  setEditOpen: (open: boolean) => void;
}

function ProfileModal({
  nickname,
  profileImage,
  editOpen,
  setEditOpen,
}: Props) {
  const [profileImg, setProfileImg] = useState<File | null>(null);
  const [editName, setEditName] = useState(nickname);
  const submitProfile = useUpdateProfile();

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      if (!IMAGE_ALLOWED_FILE_TYPES.includes(file.type)) {
        console.warn("파일 타입 에러");
        return;
      }
      setProfileImg(file);
    }
    event.target.value = "";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (target.value.length > NICKNAME_MAX_LENGTH) {
      target.value = target.value.slice(0, NICKNAME_MAX_LENGTH);
    }
    setEditName(target.value);
  };

  const handleSubmit = () => {
    submitProfile.mutate(
      {
        nickname: nickname !== editName ? editName : null,
        profileImage: profileImg,
      },
      {
        onSuccess: () => {
          setEditName("");
          setProfileImg(null);
          setEditOpen(false);
        },
      },
    );
  };

  return (
    <Dialog open={editOpen} onOpenChange={setEditOpen}>
      <DialogContent className="flex h-400 max-w-550 flex-col items-center justify-center px-38 pb-44 pt-32">
        <DialogTitle>프로필 설정</DialogTitle>
        <DialogDescription className="sr-only">
          프로필 보기 및 수정하기
        </DialogDescription>
        <div className="flex h-full w-full flex-col items-center justify-center gap-24">
          <div className="group relative h-90 w-90 overflow-hidden rounded-full border border-coolGray-200">
            <Image
              src={profileImg ? URL.createObjectURL(profileImg) : profileImage}
              alt="사용자 이미지"
              width={90}
              height={90}
            />
            <label
              className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100"
              aria-label="프로필 이미지 수정"
              htmlFor="file"
            >
              <Pen className="text-white" />
            </label>
            <input
              id="file"
              type="file"
              name="file"
              onChange={handleFileChange}
              className="hidden"
              accept="image/*"
            />
          </div>
          <div className="flex w-full items-center justify-center gap-12">
            <div>이름</div>

            <span className="relative w-full max-w-320">
              <Input
                placeholder="폴더 이름을 입력하세요"
                className="rounded-8 border px-8 py-6 text-Type-16-medium placeholder:text-coolGray-300"
                value={editName}
                maxLength={NICKNAME_MAX_LENGTH}
                onInput={handleInputChange}
              />
              <span className="absolute right-8 top-0 flex h-full items-center justify-center text-Type-14-bold text-coolGray-500">
                {editName.length}/{NICKNAME_MAX_LENGTH}
              </span>
            </span>
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-12">
          <DialogClose id="closeModal" asChild>
            <Button variant="secondary">취소</Button>
          </DialogClose>
          <Button onClick={handleSubmit}>변경사항 저장</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProfileModal;
