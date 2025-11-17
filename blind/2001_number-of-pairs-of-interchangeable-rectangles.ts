function interchangeableRectangles(rectangles: number[][]): number {
  const map: Record<number, number> = {};

  let result = 0;

  for (let i = 0; i < rectangles.length; i++) {
    const rec = rectangles[i];
    const value = rec[0] / rec[1];

    map[value] = (map[value] ?? 0) + 1;
  }

  for (const value of Object.values(map)) {
    result += (value * (value - 1)) / 2;
  }

  return result;
}

console.log(
  interchangeableRectangles([
    [4, 8],
    [3, 6],
    [10, 20],
    [15, 30],
  ])
);

console.log(
  interchangeableRectangles([
    [4, 5],
    [7, 8],
  ])
);
