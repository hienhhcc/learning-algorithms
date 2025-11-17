function minimizeMax(nums: number[], p: number): number {
  const n = nums.length;

  nums.sort((a, b) => a - b);

  function canFormPPairs(difference: number): boolean {
    let count = 0;
    let i = 0;

    while (i < n) {
      if (Math.abs(nums[i] - nums[i + 1]) <= difference) {
        count++;
        i += 2;
      } else {
        i++;
      }
    }

    return count >= p;
  }

  let low = 0;
  let high = Math.max(...nums) - Math.min(...nums);
  let result = high;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);

    if (canFormPPairs(middle)) {
      result = middle;
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return result;
}

console.log(minimizeMax([10, 1, 2, 7, 1, 3], 2));
console.log(minimizeMax([4, 2, 1, 2], 1));
