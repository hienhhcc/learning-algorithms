function searchInsert(nums: number[], target: number): number {
  const n = nums.length;
  let l = 0,
    r = n - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (nums[m] > target) {
      r = m - 1;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      return m;
    }
  }

  return l;
}

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3], 2));
