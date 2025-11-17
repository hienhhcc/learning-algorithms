function longestOnes(nums: number[], k: number): number {
  const n = nums.length;
  let result = 0;
  let currFlip = 0;

  let l = 0;
  for (let r = 0; r < n; r++) {
    if (nums[r] === 0) currFlip++;

    while (currFlip > k) {
      if (nums[l] === 0) currFlip--;
      l++;
    }

    if (currFlip <= k) {
      result = Math.max(result, r - l + 1);
    }
  }

  return result;
}

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
);
console.log(longestOnes([0, 0, 0, 1], 4));
