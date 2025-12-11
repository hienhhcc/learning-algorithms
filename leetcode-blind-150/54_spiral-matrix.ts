function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length;
  const n = matrix[0].length;

  let direction = "right";
  let positionSet = new Set<string>();

  let currRow = 0;
  let currCol = 0;
  const result: number[] = [];

  while (positionSet.size !== m * n) {
    positionSet.add(`${currRow},${currCol}`);
    result.push(matrix[currRow][currCol]);
    if (direction === "right") {
      if (currCol === n - 1 || positionSet.has(`${currRow},${currCol + 1}`)) {
        direction = "bottom";
        currRow++;
      } else {
        currCol++;
      }
    } else if (direction === "bottom") {
      if (currRow === m - 1 || positionSet.has(`${currRow + 1},${currCol}`)) {
        direction = "left";
        currCol--;
      } else {
        currRow++;
      }
    } else if (direction === "left") {
      if (currCol === 0 || positionSet.has(`${currRow},${currCol - 1}`)) {
        direction = "top";
        currRow--;
      } else {
        currCol--;
      }
    } else if (direction === "top") {
      if (currRow === 0 || positionSet.has(`${currRow - 1},${currCol}`)) {
        direction = "right";
        currCol++;
      } else {
        currRow--;
      }
    }
  }

  return result;
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
