function maxFrequency(nums: number[], k: number) {
  nums.sort((a, b) => a - b);

  const n = nums.length;

  let max = 0;
  let windowSum = 0;

  let l = 0;
  for (let r = 0; r < n; r++) {
    windowSum += nums[r];

    while (nums[r] * (r - l + 1) > windowSum + k) {
      windowSum -= nums[l];
      l++;
    }

    max = Math.max(max, r - l + 1);
  }

  return max;
}

console.log(maxFrequency([1, 2, 4], 5));
console.log(maxFrequency([1, 4, 8, 13], 5));
