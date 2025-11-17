function minimumDifference(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  const n = nums.length;

  let result = nums[n - 1];
  let l = 0;
  for (let r = 0; r < n; r++) {
    //* Check if window size out of bound
    if (r - l + 1 > k) {
      l++;
    }

    //* Is the correct window
    if (r - l + 1 === k) {
      result = Math.min(result, nums[r] - nums[l]);
    }
  }

  return result;
}

console.log(minimumDifference([90], 1));
console.log(minimumDifference([9, 4, 1, 7], 2));
