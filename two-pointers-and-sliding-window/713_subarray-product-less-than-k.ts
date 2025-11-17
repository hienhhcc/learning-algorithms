function numSubarrayProductLessThanK(nums: number[], k: number): number {
  const n = nums.length;
  let result = 0;

  let currProduct = 1;
  let l = 0;
  for (let r = 0; r < n; r++) {
    currProduct *= nums[r];

    while (l <= r && currProduct >= k) {
      currProduct /= nums[l];
      l++;
    }

    if (currProduct < k) {
      result += r - l + 1;
    }
  }

  return result;
}

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
console.log(numSubarrayProductLessThanK([1, 2, 3], 0));
console.log(numSubarrayProductLessThanK([1, 2, 3, 4, 5], 1));
