function maximumBeauty(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  const n = nums.length;

  let result = 0;
  let l = 0;
  for (let r = 0; r < n; r++) {
    while (nums[r] - nums[l] > 2 * k) {
      l++;
    }

    result = Math.max(result, r - l + 1);
  }

  return result;
}

console.log(maximumBeauty([4, 6, 1, 2], 2));
console.log(maximumBeauty([1, 1, 1, 1], 10));
