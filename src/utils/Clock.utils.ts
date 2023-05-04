import { ITime } from "@/types/Clock.types";

export const calculateTimeFromSeconds = (secs: number): ITime => {
  const minutes = Math.trunc((secs % 3600) / 60);
  const hours = Math.trunc(secs / 3600);
  const seconds = secs % 60;
  return { hours, minutes, seconds };
};
