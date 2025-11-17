function findPeakElement(nums: number[]): number {
  const n = nums.length;
  let l = 0,
    r = n - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    const isGreaterThanLeft = m - 1 < 0 ? true : nums[m] > nums[m - 1];
    const isGreaterThanRight = m + 1 > n - 1 ? true : nums[m] > nums[m + 1];

    if (isGreaterThanLeft && isGreaterThanRight) return m;

    if (nums[m] < nums[m - 1]) {
      r = m - 1;
    } else if (nums[m] < nums[m + 1]) {
      l = m + 1;
    }
  }

  return -1;
}

console.log(findPeakElement([1, 2, 3, 1]));
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
