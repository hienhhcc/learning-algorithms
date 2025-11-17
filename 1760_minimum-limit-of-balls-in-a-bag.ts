/*
  Minimized the maximum -> Hint to binary search
  Check feasibility -> With a cap number of balls in a bag. Can we divide <= cap. If can we can divide with (cap+1,cap+2) -> Monotonic -> Binary Search
  Need to define a canSplit(numBalls:number) check if we can divide the balls with maxOperations 
    - If can, we need to decrease the numBalls.
    - If not, we need to increase the numBalls.
  LowBound = 
  HighBound = 
*/
function minimumSize(nums: number[], maxOperations: number): number {
  function canSplit(cap: number) {
    let splitsNeeded = 0;

    for (const n of nums) {
      const bagsNeeded = Math.ceil(n / cap);
      splitsNeeded += bagsNeeded - 1;
    }

    return splitsNeeded <= maxOperations;
  }

  let low = 1;
  let high = Math.max(...nums);
  let answer = high;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    if (canSplit(middle)) {
      answer = Math.min(answer, middle);
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return answer;
}

console.log(minimumSize([9], 2)); //3
console.log(minimumSize([2, 4, 8, 2], 4)); //2
