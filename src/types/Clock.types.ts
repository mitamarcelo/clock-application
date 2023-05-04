export interface ITime {
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export interface IDateTime extends ITime {
  day?: number;
  month?: number;
  year?: number;
}

interface ClockWithDate {
  date: Date;
  seconds?: never;
  time?: never;
}

interface ClockWithSeconds {
  date?: never;
  seconds: number;
  time?: never;
}

interface ClockWithTime {
  date?: never;
  seconds?: never;
  time: ITime;
}

export type ClockProps = ClockWithDate | ClockWithSeconds | ClockWithTime;
