/*
  Mimimum time -> hint to binary search
  Feasability check -> For sure if n cars can be repair at k minutes, it can be repair at (k+1),(k+2) minutes. -> Hint for binary search
  Need to defined a canRepair(minutes: number) that check for a given minutes, can mechanics repair all the cars
  LowerBound = Math.min(...ranks) * cars^2;
  UpperBound = Math.max(...ranks) * cars^2; 
*/
function repairCars(ranks: number[], cars: number): number {
  function canRepair(minutes: number) {
    let sum = 0;

    for (const r of ranks) {
      sum += Math.floor(Math.sqrt(minutes / r));
    }

    return sum >= cars;
  }

  let low = 1;
  let high = Math.max(...ranks) * cars * cars;
  let answer = high;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (canRepair(mid)) {
      answer = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return answer;
}

console.log(repairCars([4, 2, 3, 1], 10)); //16
console.log(repairCars([5, 1, 8], 6)); //16
