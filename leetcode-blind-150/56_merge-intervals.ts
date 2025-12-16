function merge(intervals: number[][]): number[][] {
  const n = intervals.length;

  const result: number[][] = [];

  //Sort the intervals by the first element of the inner element
  intervals.sort((a, b) => a[0] - b[0]);

  let start = intervals[0][0];
  let end = intervals[0][1];
  for (let i = 0; i < n; i++) {
    if (start === -1 && end === -1) {
      start = intervals[i][0];
      end = intervals[i][1];
    }

    if (i + 1 >= n) {
      result.push([start, end]);
      break;
    }

    const startOfNextElement = intervals[i + 1][0];
    const endOfNextElement = intervals[i + 1][1];

    if (end >= startOfNextElement) {
      end = endOfNextElement > end ? endOfNextElement : end;
    } else {
      result.push([start, end]);
      start = -1;
      end = -1;
    }
  }

  return result;
}
console.log(
  merge([
    [1, 4],
    [2, 3],
  ])
);

// console.log(
//   merge([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
//   ])
// );

// console.log(
//   merge([
//     [1, 4],
//     [4, 5],
//   ])
// );

// console.log(
//   merge([
//     [4, 7],
//     [1, 4],
//   ])
// );
