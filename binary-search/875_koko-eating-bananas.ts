function minEatingSpeed(piles: number[], h: number): number {
  const n = piles.length;

  function canEatWithinH(k: number) {
    let totalHours = 0;
    for (let i = 0; i < n; i++) {
      totalHours += Math.ceil(piles[i] / k);
    }

    return totalHours <= h;
  }

  let low = 1,
    high = Math.max(...piles);
  let result: number = high;
  while (low <= high) {
    const middle = Math.floor((low + high) / 2);

    if (canEatWithinH(middle)) {
      high = middle - 1;
      result = middle;
    } else {
      low = middle + 1;
    }
  }

  return result;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
