function search(nums: number[], target: number): boolean {
  const n = nums.length;
  let l = 0;
  let r = n - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (nums[m] === target) {
      return true;
    }

    if (nums[m] > nums[l]) {
      if (target > nums[m] || target < nums[l]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    } else if (nums[m] < nums[l]) {
      if (target < nums[m] || target > nums[r]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      l++;
    }
  }

  return false;
}

console.log(search([2, 5, 6, 0, 0, 1, 2], 0));
console.log(search([2, 5, 6, 0, 0, 1, 2], 3));
