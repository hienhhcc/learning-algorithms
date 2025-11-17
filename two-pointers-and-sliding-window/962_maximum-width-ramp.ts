function maxWidthRamp(nums: number[]): number {
  const n = nums.length;

  const maxToRightArr: number[] = Array.from({ length: n }, () => 0);
  let currMax = 0;
  for (let i = n - 1; i >= 0; i--) {
    maxToRightArr[i] = Math.max(currMax, nums[i]);
    currMax = maxToRightArr[i];
  }
  let result = 0;
  let l = 0;
  for (let r = 1; r < n; r++) {
    if (nums[l] > maxToRightArr[r]) l++;

    result = Math.max(result, r - l);
  }

  return result;
}

console.log(maxWidthRamp([6, 0, 8, 2, 1, 5]));
console.log(maxWidthRamp([9, 8, 1, 0, 1, 9, 4, 0, 4, 1]));
