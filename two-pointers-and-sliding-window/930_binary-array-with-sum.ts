function numSubarraysWithSum(nums: number[], goal: number): number {
  return helper(nums, goal) - helper(nums, goal - 1);
}

function helper(nums: number[], goal: number): number {
  const n = nums.length;

  if (goal < 0) return 0;

  let result: number = 0;

  let sum = 0;
  let l = 0;
  for (let r = 0; r < n; r++) {
    sum += nums[r];
    while (sum > goal) {
      sum -= nums[l];
      l++;
    }

    result += r - l + 1;
  }

  return result;
}
console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2)); //4
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0)); //15
