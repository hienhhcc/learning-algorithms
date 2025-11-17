function leastBricks(wall: number[][]): number {
  const n = wall.length;
  if (n === 0) return 0;

  let sumOfFirstRow = 0;
  for (let i = 0; i < wall[0].length; i++) {
    sumOfFirstRow += wall[0][i];
  }

  const countGap = { "0": 0 };

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < wall[i].length - 1; j++) {
      sum += wall[i][j];
      countGap[sum] = (countGap[sum] ?? 0) + 1;
    }
  }

  return n - Math.max(...(Object.values(countGap) as number[]));
}

console.log(
  leastBricks([
    [1, 2, 2, 1],
    [3, 1, 2],
    [1, 3, 2],
    [2, 4],
    [3, 1, 2],
    [1, 3, 1, 1],
  ])
); // 2
console.log(leastBricks([[1], [1], [1]])); //3
