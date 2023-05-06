import React, { FC } from "react";
import { NumberDisplayProps } from "@/types/SevenSegment.types";
import styles from "@/styles/NumberDisplay.module.scss";
import SevenSegment from "./SevenSegment";

const NumberDisplay: FC<NumberDisplayProps> = ({ num }) => {
  if (num === undefined) return null;
  const digits = num
    .toString()
    .padStart(2, "0")
    .split("")
    .map((dig) => parseInt(dig));

  return (
    <div className={styles.groupOfDisplays}>
      {digits.map((digit, ind) => (
        <SevenSegment key={`${digit}_${ind}`} number={digit} />
      ))}
    </div>
  );
};

export default NumberDisplay;
