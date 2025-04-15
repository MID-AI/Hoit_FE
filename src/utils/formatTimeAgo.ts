import dayjs from "./dayjs";

export default function formatTimeAgo(dateString: string): string {
  const now = dayjs();
  const target = dayjs(dateString);
  const diffMinutes = now.diff(target, "minute");

  if (diffMinutes < 1) {
    return "방금";
  }

  const diffDays = now.diff(target, "day");
  if (diffDays < 30) return target.fromNow();

  return target.format("YYYY년 M월 D일");
}
