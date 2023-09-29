import { TIME } from "./constants";

export function formatTime(time: string) {
  const timeItem = TIME.find((item) => item.time === time);
  return timeItem ? timeItem.display : "Invalid Time!";
}
