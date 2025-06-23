"use client";

import useGetUser from "@/hooks/user/auth/useGetUser";
import SidebarAlert from "./SidebarAlert";
import SidebarCredit from "./SidebarCredit";
import SidebarNickname from "./SidebarNickname";
import SidebarLogin from "./SidebarLogin";

export default function SidebarUser() {
  const { data, isLoading } = useGetUser();

  if (isLoading) return null;
  return (
    <div>
      {data ? (
        <>
          <SidebarAlert />
          <SidebarCredit credit={String(data?.credit)} />
          <SidebarNickname
            nickname={data?.nickname}
            profileImage={data?.profileImage}
            credit={data?.credit}
          />
        </>
      ) : (
        <SidebarLogin />
      )}
    </div>
  );
}
