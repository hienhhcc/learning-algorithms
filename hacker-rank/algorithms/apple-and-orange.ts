function countApplesAndOranges(
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[]
): void {
  let countApples = 0,
    countOranges = 0;

  for (const d of apples) {
    const position = d + a;
    if (position >= s && position <= t) countApples++;
  }

  for (const d of oranges) {
    const position = d + b;
    if (position >= s && position <= t) countOranges++;
  }

  console.log(countApples);
  console.log(countOranges);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
