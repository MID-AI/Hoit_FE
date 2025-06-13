import BellIcon from "@/assets/icon/bell.svg";

function NoNotification() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-coolGray-800">
      <BellIcon className="mb-12 h-24 w-24" />
      <span className="mb-6 text-Type-18-medium">
        도착한 알림이 아직 없습니다.
      </span>
      <span className="text-Type-12-regular">
        알림이 도착하면 여기서 확인 할 수 있어요.
      </span>
    </div>
  );
}

export default NoNotification;
