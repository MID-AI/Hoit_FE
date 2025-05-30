interface Props {
  onClick: () => void;

  children: React.ReactNode;
}

function ToolbarWrapper({ onClick, children }: Props) {
  return (
    <div className="flex items-center text-Type-20-bold">
      {children}
      <button
        onClick={onClick}
        className="ml-26 rounded-22 bg-cBlue-400 px-13 py-4 text-white"
      >
        취소
      </button>
    </div>
  );
}

export default ToolbarWrapper;
