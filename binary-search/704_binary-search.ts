function search(nums: number[], target: number): number {
  const n = nums.length;
  let l = 0;
  let r = n - 1;

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

  return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9)); //4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); //-1
