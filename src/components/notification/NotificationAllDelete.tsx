import useDeleteNotifications from "@/hooks/user/notification/useDeleteNotifications";
import NotificationButton from "./NotificationButton";

function NotificationAllDelete() {
  const deleteMutate = useDeleteNotifications();

  const handleClick = () => {
    deleteMutate.mutate();
  };

  return <NotificationButton text="전체삭제" onClick={handleClick} />;
}

export default NotificationAllDelete;
