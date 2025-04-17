function FolderEditItem({
  title,
  icon,
  onClick,
}: {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex h-24 w-111 items-center rounded-10 border-[0.5px] border-white py-5 pl-7 text-Type-12-medium text-coolGray-600 hover:border-cBlue-400 hover:bg-cBlue-50"
    >
      <span className="mr-12 flex-shrink-0">{icon}</span>
      <span className="w-fit truncate">{title}</span>
    </button>
  );
}

export default FolderEditItem;
