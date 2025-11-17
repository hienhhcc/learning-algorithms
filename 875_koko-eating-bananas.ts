function minEatingSpeed(piles: number[], h: number) {
  function canFinish(speed: number) {
    let hoursNeedToHave = 0;

    for (const p of piles) {
      hoursNeedToHave += Math.ceil(p / speed);
    }

    return hoursNeedToHave <= h;
  }

  let l = 0;
  let r = Math.max(...piles);

  while (l < r) {
    const m = Math.floor((l + r) / 2);

    if (canFinish(m)) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  return l;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8)); // 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // 30
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); // 23
