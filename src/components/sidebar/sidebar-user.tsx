"use client";

import useGetUser from "@/hooks/user/auth/use-get-user-profile";
import SidebarNickname from "./sidebar-nickname";
import SidebarCredit from "./sidebar-credit";
import SidebarAlert from "./sidebar-alert";

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
