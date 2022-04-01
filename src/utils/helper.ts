type Point = { x: number, y: number; };

export const pathFromBezierCurve = ({
  initialAxis, initialControlPoint, endingControlPoint, endingAxis,
}: { [p: string]: Point; }) => {
  return `
    M${initialAxis.x} ${initialAxis.y}
    c ${initialControlPoint.x} ${initialControlPoint.y}
    ${endingControlPoint.x} ${endingControlPoint.y}
    ${endingAxis.x} ${endingAxis.y}
  `;
};
