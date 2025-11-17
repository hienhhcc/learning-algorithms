function minSubArrayLen(target: number, nums: number[]): number {
  const n = nums.length;

  let result: number = n + 1;
  let sum = 0;

  let l = 0;
  for (let r = 0; r < n; r++) {
    sum += nums[r];

    while (sum >= target) {
      result = Math.min(result, r - l + 1);
      sum -= nums[l];
      l++;
    }
  }

  if (result === n + 1) return 0;

  return result;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
