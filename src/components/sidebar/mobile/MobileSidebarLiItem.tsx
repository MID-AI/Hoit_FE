function MobileSidebarLiItem({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <li
      onClick={onClick}
      className="flex items-center px-8 py-10 text-Type-18-medium text-gray-800 hover:bg-gray-100"
    >
      {text}
    </li>
  );
}

export default MobileSidebarLiItem;
