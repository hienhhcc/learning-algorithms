function searchMatrix(matrix: number[][], target: number): boolean {
  const flatMatrix = matrix.reduce((prev, curr) => prev.concat(curr), []);

  let l = 0,
    r = flatMatrix.length - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (flatMatrix[m] > target) {
      r = m - 1;
    } else if (flatMatrix[m] < target) {
      l = m + 1;
    } else {
      return true;
    }
  }

  return false;
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
);
