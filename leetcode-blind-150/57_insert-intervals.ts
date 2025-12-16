function insert(intervals: number[][], newInterval: number[]): number[][] {
  const result: number[][] = [];

  let [newStart, newEnd] = newInterval;
  let inserted = false;

  for (const [start, end] of intervals) {
    if (end < newStart) {
      result.push([start, end]);
    } else if (start > newEnd) {
      if (!inserted) {
        result.push([newStart, newEnd]);
        inserted = true;
      }
      result.push([start, end]);
    } else {
      newStart = Math.min(start, newStart);
      newEnd = Math.max(end, newEnd);
    }
  }

  if (!inserted) result.push([newStart, newEnd]);

  return result;
}

console.log(insert([[1, 5]], [6, 8]));
console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);

console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
);
console.log(insert([[1, 5]], [2, 3]));
