interface ISevenSegments {
  width?: number;
  blink?: boolean;
}

interface SevenSegmentWithNumber extends ISevenSegments {
  number: number;
  segments?: never;
}

interface SevenSegmentWithSegments extends ISevenSegments {
  number?: never;
  segments: number[];
}

export type NumberDisplayProps = {
  num?: number;
};

export type SevenSegmentProps =
  | SevenSegmentWithNumber
  | SevenSegmentWithSegments;
