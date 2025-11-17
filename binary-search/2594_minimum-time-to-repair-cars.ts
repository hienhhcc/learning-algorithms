function repairCars(ranks: number[], cars: number): number {
  const n = ranks.length;
  function canRepairCarsInTime(time: number): boolean {
    let countRepairedCars = 0;

    for (let i = 0; i < n; i++) {
      countRepairedCars += Math.floor(Math.sqrt(time / ranks[i]));
    }

    return countRepairedCars >= cars;
  }

  let low = 1;
  let high = Math.max(...ranks) * cars * cars;
  let result = high;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);

    if (canRepairCarsInTime(middle)) {
      result = middle;
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return result;
}

console.log(repairCars([4, 2, 3, 1], 10));
console.log(repairCars([5, 1, 8], 6));
