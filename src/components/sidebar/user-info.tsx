import cn from "@/utils/cn";
import Image from "next/image";
import React from "react";

function UserInfo({
  nickname,
  credit,
  profileImage,
}: {
  nickname: string;
  credit: number;
  profileImage: string;
}) {
  return (
    <>
      <div>{credit}</div>
      <div
        className={cn(
          "box-border flex h-48 w-full cursor-pointer items-center gap-8 rounded-71 px-12 py-12 text-coolGray-500",
        )}
      >
        <Image src={profileImage} alt="프로필 이미지" width={25} height={25} />
        {nickname}
      </div>
    </>
  );
}

export default UserInfo;
