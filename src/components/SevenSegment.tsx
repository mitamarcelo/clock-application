import React, { FC, useEffect, useMemo, useState } from "react";

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
  blink = false,
}) => {
  const { padding, horizontalStyles, verticalStyles } = useMemo(
    () => segmentsMeasures(width),
    [width]
  );

  const [lighten, setLighten] = useState<boolean>(true);
  const lightenSegments: number[] | undefined =
    number !== undefined ? lightenSegmentsFromNumber(number) : segments;

  const activeSegment = (num: number) =>
    lighten && lightenSegments.includes(num);

  useEffect(() => {
    const interval = blink
      ? setInterval(() => {
          setLighten((p) => !p);
        }, 700)
      : undefined;
    return () => clearInterval(interval);
  }, []);

  return lightenSegments === undefined ? null : (
    <div className={style.display} style={{ width, padding }}>
      <div className={style.horizontalRow}>
        <div
          className={classNames(style.segment, {
            [style.active]: activeSegment(1),
          })}
          style={horizontalStyles}
        />
      </div>
      <div className={style.verticalRow}>
        <div
          className={classNames(style.segment, {
            [style.active]: activeSegment(6),
          })}
          style={verticalStyles}
        />
        <div
          className={classNames(style.segment, {
            [style.active]: activeSegment(2),
          })}
          style={verticalStyles}
        />
      </div>
      <div className={style.horizontalRow}>
        <div
          className={classNames(style.segment, {
            [style.active]: activeSegment(7),
          })}
          style={horizontalStyles}
        />
      </div>
      <div className={style.verticalRow}>
        <div
          className={classNames(style.segment, {
            [style.active]: activeSegment(5),
          })}
          style={verticalStyles}
        />
        <div
          className={classNames(style.segment, {
            [style.active]: activeSegment(3),
          })}
          style={verticalStyles}
        />
      </div>
      <div className={style.horizontalRow}>
        <div
          className={classNames(style.segment, {
            [style.active]: activeSegment(4),
          })}
          style={horizontalStyles}
        />
      </div>
    </div>
  );
};

export default SevenSegment;
