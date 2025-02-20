import UserIcon from "@/assets/icon/profile.svg";
import Login from "../common/auth/login";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { cn } from "@/lib/utils";

export default function SidebarUser({
  icon,
  mobile,
}: {
  icon?: boolean;
  mobile?: boolean;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={cn(
            "box-border flex h-48 w-full cursor-pointer items-center gap-8 rounded-71 px-12 py-12 text-coolGray-500",
            icon && "justify-center px-0 py-0",
            mobile &&
              "flex flex-col space-y-1 text-muted-foreground hover:bg-transparent hover:text-primary",
          )}
        >
          <UserIcon className={cn(icon || mobile ? "" : "")} />
          {!icon && <span className={mobile ? "text-xs" : ""}>로그인</span>}
        </div>
      </DialogTrigger>
      <Login />
    </Dialog>
  );
}
