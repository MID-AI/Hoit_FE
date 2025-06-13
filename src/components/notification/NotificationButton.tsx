function NotificationButton({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={() => {
        if (onClick) onClick();
      }}
      className="rounded-20 border border-coolGray-300 px-12 py-8"
    >
      {text}
    </button>
  );
}

export default NotificationButton;
