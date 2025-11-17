function maximumSubarraySum(nums: number[], k: number): number {
  const n = nums.length;

  const hashSet = new Set();
  let max = 0;
  let currSum = 0;

  let l = 0;
  for (let r = 0; r < n; r++) {
    while (hashSet.has(nums[r])) {
      currSum -= nums[l];
      hashSet.delete(nums[l]);
      l++;
    }

    currSum += nums[r];
    hashSet.add(nums[r]);

    while (r - l + 1 > k) {
      currSum -= nums[l];
      hashSet.delete(nums[l]);
      l++;
    }

    if (r - l + 1 === k) {
      max = Math.max(max, currSum);
    }
  }

  return max;
}

console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3));
// console.log(maximumSubarraySum([4, 4, 4], 3));
// console.log(maximumSubarraySum([5, 3, 3, 1, 1], 3));
// console.log(maximumSubarraySum([9, 18, 10, 13, 17, 9, 19, 2, 1, 18], 5));
// console.log(maximumSubarraySum([3, 2, 3, 1], 3));
