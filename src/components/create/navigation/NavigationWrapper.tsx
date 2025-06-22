import ResetButton from "./ResetButton";

function NavigationWrapper({
  children,
  onClickReset,
  disabled,
}: {
  children: React.ReactNode;
  onClickReset: () => void;
  disabled: boolean;
}) {
  return (
    <nav className="flex h-fit w-full flex-col items-center rounded-22 border border-coolGray-300 bg-white p-20 text-coolGray-800 md:max-w-278 md:px-12 md:py-32 md:pt-30">
      <div className="grid h-full w-full grid-cols-[1fr_2fr_2fr] gap-32 md:flex md:flex-col">
        {children}
      </div>
      <ResetButton onClick={onClickReset} disabled={disabled} />
    </nav>
  );
}

export default NavigationWrapper;
