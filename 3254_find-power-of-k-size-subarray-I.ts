function resultsArray(nums: number[], k: number): number[] {
  const n = nums.length;
  const result = Array(n - k + 1).fill(-1);

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

console.log("Result:" + resultsArray([1, 2, 3, 4, 3, 2, 5], 3));
console.log("Result:" + resultsArray([2, 2, 2, 2, 2], 4));
console.log("Result:" + resultsArray([3, 2, 3, 2, 3, 2], 2));
console.log("Result:" + resultsArray([1, 3, 4], 2));
