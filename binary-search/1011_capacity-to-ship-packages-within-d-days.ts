function shipWithinDays(weights: number[], days: number): number {
  const n = weights.length;

  function canShipWithCapacity(cap: number): boolean {
    let shipNeeded = 1;
    let currCap = cap;

    for (let i = 0; i < n; i++) {
      if (currCap < weights[i]) {
        shipNeeded++;
        currCap = cap - weights[i];
      } else {
        currCap -= weights[i];
      }
    }

    return shipNeeded <= days;
  }

  let low = Math.max(...weights);
  let high = weights.reduce((prev, curr) => prev + curr, 0);
  let result = high;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);

    if (canShipWithCapacity(middle)) {
      high = middle - 1;
      result = middle;
    } else {
      low = middle + 1;
    }
  }

  return result;
}

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3));
console.log(shipWithinDays([1, 2, 3, 1, 1], 4));
