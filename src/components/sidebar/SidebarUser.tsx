"use client";

import useGetUser from "@/hooks/user/auth/use-get-user-profile";
import SidebarNickname from "./SidebarNickname";
import SidebarCredit from "./SidebarCredit";
import SidebarAlert from "./SidebarAlert";

export default function SidebarUser() {
  const { data, isLoading } = useGetUser();

  if (isLoading) return null;
  return (
    <div>
      {data && (
        <>
          <SidebarAlert userId={data?.id} />
          <SidebarCredit credit={String(data?.credit)} />
        </>
      )}
      <SidebarNickname
        nickname={data?.nickname}
        profileImage={data?.profileImage}
      />
    </div>
  );
}
