import { CircleUserRound } from "lucide-react";
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
            "flex cursor-pointer items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            icon && "h-10 w-10 justify-center px-0 py-0",
            mobile &&
              "flex flex-col space-y-1 text-muted-foreground hover:bg-transparent hover:text-primary",
          )}
        >
          <CircleUserRound
            className={cn(icon || mobile ? "h-5 w-5" : "mr-2 h-4 w-4")}
          />
          {!icon && <span className={mobile ? "text-xs" : ""}>로그인</span>}
        </div>
      </DialogTrigger>
      <Login />
    </Dialog>
  );
}
