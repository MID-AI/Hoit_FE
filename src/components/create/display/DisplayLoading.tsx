import ScreenStarIcon from "@/assets/create/screen_star.svg";
import { Skeleton } from "@/components/ui/skeleton";

function DisplayLoading({ progress }: { progress?: number | null }) {
  return (
    <Skeleton className="flex h-full w-full max-w-820 items-center justify-center bg-coolGray-300 text-white">
      <ScreenStarIcon className="h-355 w-353" />
      <div>{progress}</div>
    </Skeleton>
  );
}

export default DisplayLoading;
