function maxFrequency(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  const n = nums.length;

  let result = 0;
  let prefixSum = 0;

  let l = 0;
  for (let r = 0; r < n; r++) {
    prefixSum += nums[r];
    if (nums[r] * (r - l + 1) > prefixSum + k) {
      prefixSum -= nums[l];
      l++;
    }

    result = Math.max(result, r - l + 1);
  }

  return result;
}

console.log(maxFrequency([1, 2, 4], 5));
console.log(maxFrequency([1, 4, 8, 13], 5));
console.log(maxFrequency([3, 9, 6], 2));
