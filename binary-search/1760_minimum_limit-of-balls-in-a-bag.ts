function minimumSize(nums: number[], maxOperations: number): number {
  const n = nums.length;

  function canSplit(cap: number): boolean {
    let countSplit = 0;

    for (let i = 0; i < n; i++) {
      const bagNeeded = Math.ceil(nums[i] / cap);
      countSplit += bagNeeded - 1;
    }

    return countSplit <= maxOperations;
  }

  let low = 1;
  let high = Math.max(...nums);
  let result = high;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);

    if (canSplit(middle)) {
      result = middle;
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return result;
}

console.log(minimumSize([9], 2));
console.log(minimumSize([2, 4, 8, 2], 4));
