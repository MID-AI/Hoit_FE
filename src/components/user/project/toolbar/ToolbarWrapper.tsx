interface Props {
  onClick: () => void;

  children: React.ReactNode;
}

function ToolbarWrapper({ onClick, children }: Props) {
  return (
    <div className="mt-12 flex items-center text-Type-18-bold md:mt-0">
      {children}
      <button
        onClick={onClick}
        className="rounded-22 bg-cBlue-400 px-13 py-4 text-white"
      >
        취소
      </button>
    </div>
  );
}

export default ToolbarWrapper;
