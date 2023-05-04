import React, { FC } from "react";
import moment from "moment";

import { ClockProps, IDateTime } from "@/types/Clock.types";
import styles from "@/styles/Clock.module.scss";
import SevenSegment from "./SevenSegment";
import { calculateTimeFromSeconds } from "@/utils/Clock.utils";
import classNames from "classnames";

const Clock: FC<ClockProps> = ({ date, seconds, time }) => {
  const isDate = date && moment(date).isValid();
  const momentDateTime = isDate ? moment(date) : null;
  let numbersToDisplay: IDateTime = {};

  if (isDate) {
    numbersToDisplay = {
      day: momentDateTime?.get("date"),
      month: momentDateTime?.get("month")
        ? momentDateTime?.get("month") + 1
        : undefined,
      year: momentDateTime?.get("year"),
      hours: momentDateTime?.get("hour"),
      minutes: momentDateTime?.get("minute"),
      seconds: momentDateTime?.get("seconds"),
    };
  } else {
    numbersToDisplay = (
      seconds !== undefined ? calculateTimeFromSeconds(seconds) : time
    ) as IDateTime;
  }

  return (
    numbersToDisplay && (
      <div className={styles.clock}>
        {isDate && (
          <div className={styles.clockRow}>
            <div className={styles.groupOfDisplays}>
              <SevenSegment
                number={
                  numbersToDisplay.day
                    ? Math.trunc(numbersToDisplay.day / 10)
                    : 0
                }
              />
              <SevenSegment
                number={numbersToDisplay.day ? numbersToDisplay.day % 10 : 0}
              />
            </div>
            <div className={classNames(styles.divisor, styles.pointBottom)}>
              <div className={styles.point} />
            </div>
            <div className={styles.groupOfDisplays}>
              <SevenSegment
                number={
                  numbersToDisplay.month
                    ? Math.trunc(numbersToDisplay.month / 10)
                    : 0
                }
              />
              <SevenSegment
                number={
                  numbersToDisplay.month ? numbersToDisplay.month % 10 : 0
                }
              />
            </div>
            <div className={classNames(styles.divisor, styles.pointBottom)}>
              <div className={styles.point} />
            </div>
            <div className={styles.groupOfDisplays}>
              <SevenSegment
                number={
                  numbersToDisplay.year
                    ? Math.trunc(numbersToDisplay.year / 1000)
                    : 0
                }
              />
              <SevenSegment
                number={
                  numbersToDisplay.year
                    ? Math.trunc((numbersToDisplay.year % 1000) / 100)
                    : 0
                }
              />
              <SevenSegment
                number={
                  numbersToDisplay.year
                    ? Math.trunc((numbersToDisplay.year % 100) / 10)
                    : 0
                }
              />
              <SevenSegment
                number={numbersToDisplay.year ? numbersToDisplay.year % 10 : 0}
              />
            </div>
          </div>
        )}
        <div className={styles.clockRow}>
          <div className={styles.groupOfDisplays}>
            <SevenSegment
              number={
                numbersToDisplay.hours
                  ? Math.trunc(numbersToDisplay.hours / 10)
                  : 0
              }
            />
            <SevenSegment
              number={numbersToDisplay.hours ? numbersToDisplay.hours % 10 : 0}
            />
          </div>
          <div className={styles.divisor}>
            <div className={styles.point} />
            <div className={styles.point} />
          </div>
          <div className={styles.groupOfDisplays}>
            <SevenSegment
              number={
                numbersToDisplay.minutes
                  ? Math.trunc(numbersToDisplay.minutes / 10)
                  : 0
              }
            />
            <SevenSegment
              number={
                numbersToDisplay.minutes ? numbersToDisplay.minutes % 10 : 0
              }
            />
          </div>
          <div className={styles.divisor}>
            <div className={styles.point} />
            <div className={styles.point} />
          </div>
          <div className={styles.groupOfDisplays}>
            <SevenSegment
              number={
                numbersToDisplay.seconds
                  ? Math.trunc(numbersToDisplay.seconds / 10)
                  : 0
              }
            />
            <SevenSegment
              number={
                numbersToDisplay.seconds ? numbersToDisplay.seconds % 10 : 0
              }
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Clock;
