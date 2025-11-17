function maxSubarrayLength(nums: number[], k: number): number {
  const n = nums.length;

  let maxLength = 0;
  let maxf = { key: -1, val: 0 };
  const map = {};

  let l = 0;
  for (let r = 0; r < n; r++) {
    map[nums[r]] = (map[nums[r]] ?? 0) + 1;
    if (map[nums[r]] > maxf.val) {
      maxf = {
        key: nums[r],
        val: map[nums[r]],
      };
    }

    while (maxf.val > k) {
      map[nums[l]]--;
      if (maxf.key === nums[l]) {
        maxf.val = maxf.val - 1;
      }
      l++;
    }

    maxLength = Math.max(maxLength, r - l + 1);
  }

  return maxLength;
}

console.log(maxSubarrayLength([1, 2, 1, 2, 1, 2, 1, 2], 1));
console.log(maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2));
console.log(maxSubarrayLength([5, 5, 5, 5, 5, 5, 5], 4));
