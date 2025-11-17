function successfulPairs(
  spells: number[],
  potions: number[],
  success: number
): number[] {
  const n = spells.length;

  potions.sort((a, b) => a - b);

  const result: number[] = [];

  for (let i = 0; i < n; i++) {
    const s = spells[i];

    let l = 0,
      r = potions.length - 1;
    let point;

    while (l <= r) {
      const m = Math.floor((l + r) / 2);
      if (s * potions[m] >= success) {
        r = m - 1;
        point = m;
      } else {
        l = m + 1;
      }
    }
    if (point == null) {
      result.push(0);
    } else {
      result.push(potions.length - point!);
    }
  }

  return result;
}

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7));
console.log(successfulPairs([3, 1, 2], [8, 5, 8], 16));
