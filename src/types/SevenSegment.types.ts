interface ISevenSegments {
  width?: number;
}

interface SevenSegmentWithNumber extends ISevenSegments {
  number: number;
  segments?: never;
}

interface SevenSegmentWithSegments extends ISevenSegments {
  number?: never;
  segments: number[];
}

export type SevenSegmentProps =
  | SevenSegmentWithNumber
  | SevenSegmentWithSegments;
