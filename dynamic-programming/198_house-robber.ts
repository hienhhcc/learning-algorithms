function rob(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  const n = nums.length;
  nums[n] = 0;

  for (let i = n - 3; i >= 0; i--) {
    nums[i] = nums[i] + Math.max(nums[i + 2], nums[i + 3]);
  }

  return Math.max(nums[0], nums[1]);
}

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
