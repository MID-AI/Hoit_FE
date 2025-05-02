import Image from "next/image";
import ScreenStarIcon from "@/assets/create/screen_star.svg";
import { Skeleton } from "@/components/ui/skeleton";

function Display({
  isLoading,
  image,
}: {
  isLoading: boolean;
  image: string[] | null;
}) {
  if (isLoading) {
    return (
      <Skeleton className="flex h-full w-full max-w-820 items-center justify-center bg-coolGray-300 text-white">
        <ScreenStarIcon className="h-355 w-353" />
      </Skeleton>
    );
  }
  return (
    <div className="flex h-full max-h-820 w-full max-w-820 items-center justify-center gap-44">
      {image ? (
        <div>
          {image.map((img) => (
            <Image key={img} src={img} alt="image" width={800} height={800} />
          ))}
        </div>
      ) : (
        <div className="flex h-full w-full max-w-820 items-center justify-center bg-coolGray-100 text-white">
          <ScreenStarIcon className="h-355 w-353" />
        </div>
      )}
    </div>
  );
}

export default Display;
