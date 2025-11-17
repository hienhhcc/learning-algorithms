function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const n = nums.length;

  const result: number[][] = [];

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1,
      r = n - 1;
    while (l < r) {
      if (nums[i] + nums[l] + nums[r] === 0) {
        result.push([nums[i], nums[l], nums[r]]);
        l++;
        while (l < r && nums[l] === nums[l - 1]) {
          l++;
        }
      } else if (nums[i] + nums[l] + nums[r] > 0) {
        r--;
      } else {
        l++;
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
