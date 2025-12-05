function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;

  const prefix: number[] = Array.from({ length: n }, () => 1);
  const suffix: number[] = Array.from({ length: n }, () => 1);

  let currentPrefix = 1;
  for (let i = 0; i < n; i++) {
    prefix[i] = currentPrefix * (nums[i - 1] ?? 1);
    currentPrefix = prefix[i];
  }

  let currentSuffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    suffix[i] = currentSuffix * (nums[i + 1] ?? 1);
    currentSuffix = suffix[i];
  }

  const results: number[] = Array.from({ length: n });
  for (let i = 0; i < n; i++) {
    results[i] = prefix[i] * suffix[i];
  }

  return results;
}

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
