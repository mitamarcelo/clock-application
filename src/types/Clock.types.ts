export enum ClockNumbers {
  Seconds = "seconds",
  Minutes = "minutes",
  Hours = "hours",
  Days = "days",
}
export interface ITime {
  hours?: number;
  minutes?: number;
  seconds?: number;
  days?: number;
}

export interface IDateTime extends ITime {
  day?: number;
  month?: number;
  year?: number;
}

interface ClockWithDate {
  date: Date;
  seconds?: never;
}

interface ClockWithSeconds {
  date?: never;
  seconds: number;
}

interface ClockWithTime {
  date?: never;
  seconds?: never;
}

export type ClockProps = ClockWithDate | ClockWithSeconds;
