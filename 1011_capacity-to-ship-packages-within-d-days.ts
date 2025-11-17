function shipWithinDays(weights: number[], days: number): number {
  function canShip(capacity: number) {
    let numberOfShips = 1;
    let i = 0;
    let currentCapacity = capacity;

    while (i < weights.length) {
      currentCapacity -= weights[i];
      if (currentCapacity < 0) {
        numberOfShips++;
        currentCapacity = capacity;
      } else {
        i++;
      }
    }

    return numberOfShips <= days;
  }

  let lowerBound = Math.max(...weights);
  let upperBound = 0;

  for (const w of weights) {
    upperBound += w;
  }

  let answer = upperBound;

  while (lowerBound <= upperBound) {
    const middle = Math.floor((lowerBound + upperBound) / 2);

    if (canShip(middle)) {
      answer = Math.min(answer, middle);
      upperBound = middle - 1;
    } else {
      lowerBound = middle + 1;
    }
  }

  return answer;
}

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); //10
console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3)); //5
console.log(shipWithinDays([1, 2, 3, 1, 1], 4)); //8
