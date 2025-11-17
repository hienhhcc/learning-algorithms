function diagonalDifference(arr: number[][]): number {
  const n = arr.length;

  let firstDiagonalSum = 0,
    secondDiagonalSum = 0;

  for (let i = 0; i < n; i++) {
    firstDiagonalSum += arr[i][i];
    secondDiagonalSum += arr[i][n - i - 1];
  }

  return Math.abs(firstDiagonalSum - secondDiagonalSum);
}

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
