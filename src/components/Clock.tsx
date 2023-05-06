import React, { FC } from "react";
import moment from "moment";

import { ClockProps, IDateTime } from "@/types/Clock.types";
import styles from "@/styles/Clock.module.scss";
import SevenSegment from "./SevenSegment";
import { calculateTimeFromSeconds } from "@/utils/Clock.utils";
import classNames from "classnames";
import NumberDisplay from "./NumberDisplay";

const Clock: FC<ClockProps> = ({ date, seconds }) => {
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
    numbersToDisplay = calculateTimeFromSeconds(seconds);
  }

  return (
    numbersToDisplay && (
      <div className={styles.clock}>
        {isDate && (
          <div className={styles.clockRow}>
            <NumberDisplay num={numbersToDisplay.day} />
            <div className={classNames(styles.divisor, styles.pointBottom)}>
              <div className={styles.point} />
            </div>
            <NumberDisplay num={numbersToDisplay.month} />
            <div className={classNames(styles.divisor, styles.pointBottom)}>
              <div className={styles.point} />
            </div>
            <NumberDisplay num={numbersToDisplay.year} />
          </div>
        )}
        <div className={styles.clockRow}>
          {!!numbersToDisplay.days && (
            <>
              <NumberDisplay num={numbersToDisplay.days} />
              <div className={classNames(styles.divisor, styles.pointBottom)}>
                <div className={styles.point} />
              </div>
            </>
          )}
          <NumberDisplay num={numbersToDisplay.hours} />
          <div className={styles.divisor}>
            <div className={styles.point} />
            <div className={styles.point} />
          </div>
          <NumberDisplay num={numbersToDisplay.minutes} />
          <div className={styles.divisor}>
            <div className={styles.point} />
            <div className={styles.point} />
          </div>
          <NumberDisplay num={numbersToDisplay.seconds} />
        </div>
      </div>
    )
  );
};

export default Clock;
