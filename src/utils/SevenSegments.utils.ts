export const segmentsMeasures = (width: number) => {
    const padding = width * 0.1;
    const borderRadius = width * 0.05;
    const referenceWidth = width - 2 * padding;
    const segmentWidth = 0.8 * referenceWidth;
    const segmentHeight = 0.1 * referenceWidth;

    const horizontalStyles = {
        width: segmentWidth,
        height: segmentHeight,
        borderRadius,
    }
    const verticalStyles = {
        width: segmentHeight,
        height: segmentWidth,
        borderRadius,
    }

    return {padding, horizontalStyles, verticalStyles};
}

export const lightenSegmentsFromNumber = (number: number) => {
    switch(number) {
        case 0:
            return [1, 2, 3, 4, 5, 6];
        case 1:
            return [2, 3];
        case 2:
            return [1, 2, 4, 5, 7];
        case 3:
            return [1, 2, 3, 4, 7];
        case 4:
            return [2, 3, 6, 7];
        case 5:
            return [1, 3, 4, 6, 7];
        case 6:
            return [1, 3, 4, 5, 6, 7];
        case 7:
            return [1, 2, 3];
        case 8:
            return [1, 2, 3, 4, 5, 6, 7];
        case 9:
            return [1, 2, 3, 4, 6, 7];
        default:
            return [];
    }
}