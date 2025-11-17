function countSubarrays(nums: number[], k: number): number {
  const n = nums.length;

  const maxElement = Math.max(...nums);

  let result = 0;
  let countMaxElement = 0;
  let l = 0;
  for (let r = 0; r < n; r++) {
    if (nums[r] === maxElement) {
      countMaxElement++;
    }

    while (countMaxElement >= k) {
      result += n - r;
      if (nums[l] === maxElement) {
        countMaxElement--;
      }
      l++;
    }
  }

  return result;
}

console.log(countSubarrays([1, 3, 2, 3, 3], 2));
console.log(countSubarrays([1, 4, 2, 1], 3));
