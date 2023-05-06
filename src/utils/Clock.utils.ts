import { ITime } from "@/types/Clock.types";

export const calculateTimeFromSeconds = (secs: number | undefined): ITime => {
  if (secs === undefined) return { hours: 0, minutes: 0, seconds: 0, days: 0 };
  const minutes = Math.trunc((secs % 3600) / 60);
  let hours = Math.trunc(secs / 3600);
  const seconds = secs % 60;
  let days = 0;

  if (hours >= 24) {
    days = Math.trunc(hours / 24);
    hours = hours % 24;
  }

  return { hours, minutes, seconds, days };
};

export const calculateSecondsFromTime = ({
  days,
  hours,
  minutes,
  seconds,
}: ITime): number => {
  const daysInSeconds = days ? days * 24 * 3600 : 0;
  const hoursInSeconds = hours ? hours * 3600 : 0;
  const minutesInSeconds = minutes ? minutes * 60 : 0;
  const secondsInSeconds = seconds ? seconds : 0;
  return daysInSeconds + hoursInSeconds + minutesInSeconds + secondsInSeconds;
};
