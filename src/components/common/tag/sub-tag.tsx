import cn from "@/utils/cn";

export default function SubTag({
  name,
  isClicked,
  ...props
}: {
  name: string;
  isClicked: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "rounded-43 border border-coolGray-400 px-18 py-7",
        isClicked && "bg-coolGray-100",
      )}
      {...props}
    >
      {name}
    </button>
  );
}
