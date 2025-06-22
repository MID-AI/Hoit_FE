import ResetIcon from "@/assets/create/reset.svg";
import cn from "@/utils/cn";

function ResetButton({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "mt-36 hidden w-72 items-center gap-6 rounded-20 border border-coolGray-100 bg-coolGray-100 px-8 py-6 disabled:cursor-not-allowed md:flex",
        !disabled &&
          "hover:border-coolGray-400 hover:bg-coolGray-200 hover:shadow-custom",
      )}
    >
      <ResetIcon />
      <span className="shrink-0 text-Type-12-regular">리셋</span>
    </button>
  );
}

export default ResetButton;
