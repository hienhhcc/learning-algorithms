function maximumBeauty(items: number[][], queries: number[]): number[] {
  items.sort((a, b) => a[0] - b[0]);
  const newQueries = queries.map((q, i) => [q, i]).sort((a, b) => a[0] - b[0]);

  const n = items.length;
  const m = newQueries.length;

  const res: number[] = [];
  let maxBeauty = 0;
  let j = 0;
  for (let [q, i] of newQueries) {
    while (j < n && items[j][0] <= q) {
      maxBeauty = Math.max(maxBeauty, items[j][1]);
      j++;
    }
    res[i] = maxBeauty;
  }

  return res;
}

console.log(
  maximumBeauty(
    [
      [1, 2],
      [3, 2],
      [2, 4],
      [5, 6],
      [3, 5],
    ],
    [1, 2, 3, 4, 5, 6]
  )
);

console.log(
  maximumBeauty(
    [
      [1, 2],
      [1, 2],
      [1, 3],
      [1, 4],
    ],
    [1]
  )
);
console.log(maximumBeauty([[10, 1000]], [5]));
