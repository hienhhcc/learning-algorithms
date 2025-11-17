function search1(nums: number[], target: number): number {
  const n = nums.length;
  let l = 0;
  let r = n - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (nums[m] === target) {
      return m;
    }

    if (nums[m] >= nums[l]) {
      if (target < nums[l] || target > nums[m]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    } else if (nums[m] < nums[l]) {
      if (target > nums[r] || target < nums[m]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
  }

  return -1;
}

console.log(search1([4, 5, 6, 7, 0, 1, 2], 0)); //4
console.log(search1([4, 5, 6, 7, 0, 1, 2], 3)); //-1
console.log(search1([1], 0)); //-1
