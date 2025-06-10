"use client";

import useGetUser from "@/hooks/user/auth/use-get-user-profile";
import SidebarAlert from "./SidebarAlert";
import SidebarCredit from "./SidebarCredit";
import SidebarNickname from "./SidebarNickname";
import useLogout from "@/hooks/user/auth/useLogout";

export default function SidebarUser() {
  const { data, isLoading } = useGetUser();
  const { mutate: logout } = useLogout();

  if (isLoading) return null;
  return (
    <div>
      {data && <button onClick={() => logout()}>로그아웃</button>}
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
