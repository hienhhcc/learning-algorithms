function minOperations(nums: number[], x: number): number {
  const n = nums.length;

  const max = maxWindow(nums, nums.reduce((prev, curr) => prev + curr, 0) - x);

  if (max === -1) return -1;

  return n - max;
}

function maxWindow(nums: number[], target: number): number {
  const n = nums.length;

  let result = -1;
  let sum = 0;
  let l = 0;
  for (let r = 0; r < n; r++) {
    sum += nums[r];
    while (sum > target) {
      sum -= nums[l];
      l++;
    }

    if (sum === target) {
      result = Math.max(result, r - l + 1);
    }
  }

  return result;
}

console.log(minOperations([1, 1, 4, 2, 3], 5));
console.log(minOperations([5, 6, 7, 8, 9], 4));
console.log(minOperations([3, 2, 20, 1, 1, 3], 10));
