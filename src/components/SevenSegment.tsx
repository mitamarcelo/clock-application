import React, { FC, useMemo } from "react";

import { SevenSegmentProps } from "@/types/SevenSegment.types";
import style from "@/styles/SevenSegment.module.scss";
import {
  lightenSegmentsFromNumber,
  segmentsMeasures,
} from "@/utils/SevenSegments.utils";
import classNames from "classnames";

const SevenSegment: FC<SevenSegmentProps> = ({
  number,
  segments,
  width = 100,
}) => {
  const { padding, horizontalStyles, verticalStyles } = useMemo(
    () => segmentsMeasures(width),
    [width]
  );
  const lightenSegments: number[] | undefined =
    number !== undefined ? lightenSegmentsFromNumber(number) : segments;

  return lightenSegments === undefined ? null : (
    <div className={style.display} style={{ width, padding }}>
      <div className={style.horizontalRow}>
        <div
          className={classNames(style.segment, {
            [style.active]: lightenSegments.includes(1),
          })}
          style={horizontalStyles}
        />
      </div>
      <div className={style.verticalRow}>
        <div
          className={classNames(style.segment, {
            [style.active]: lightenSegments.includes(6),
          })}
          style={verticalStyles}
        />
        <div
          className={classNames(style.segment, {
            [style.active]: lightenSegments.includes(2),
          })}
          style={verticalStyles}
        />
      </div>
      <div className={style.horizontalRow}>
        <div
          className={classNames(style.segment, {
            [style.active]: lightenSegments.includes(7),
          })}
          style={horizontalStyles}
        />
      </div>
      <div className={style.verticalRow}>
        <div
          className={classNames(style.segment, {
            [style.active]: lightenSegments.includes(5),
          })}
          style={verticalStyles}
        />
        <div
          className={classNames(style.segment, {
            [style.active]: lightenSegments.includes(3),
          })}
          style={verticalStyles}
        />
      </div>
      <div className={style.horizontalRow}>
        <div
          className={classNames(style.segment, {
            [style.active]: lightenSegments.includes(4),
          })}
          style={horizontalStyles}
        />
      </div>
    </div>
  );
};

export default SevenSegment;
