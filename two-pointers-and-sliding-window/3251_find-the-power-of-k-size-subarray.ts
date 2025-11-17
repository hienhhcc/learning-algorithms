function resultsArray(nums: number[], k: number): number[] {
  const n = nums.length;
  const result: number[] = Array.from({ length: n - k + 1 }, () => -1);

  let l = 0;
  for (let r = 0; r < n; r++) {
    while (r - l + 1 > k) {
      l++;
    }

    if (nums[r] - (nums[r - 1] ?? 0) !== 1) {
      l = r;
    }

    if (r - l + 1 === k) {
      result[l] = nums[r];
    }
  }

  return result;
}

console.log(resultsArray([1, 2, 3, 4, 3, 2, 5], 3));
console.log(resultsArray([2, 2, 2, 2, 2], 4));
console.log(resultsArray([3, 2, 3, 2, 3, 2], 2));
