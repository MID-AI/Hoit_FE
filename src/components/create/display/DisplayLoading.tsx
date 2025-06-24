import LoadingIcon from "@/assets/create/lodaing.svg";

function DisplayLoading({ progress }: { progress?: number | null }) {
  return (
    <div className="flex h-full w-full max-w-820 items-center justify-center bg-coolGray-300 text-white">
      <LoadingIcon className="animate-spin" />
      <div className="absolute left-[1/2] top-[1/2] text-Type-18-medium">
        {progress} %
      </div>
    </div>
  );
}

export default DisplayLoading;
