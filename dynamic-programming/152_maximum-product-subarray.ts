function maxProduct(nums: number[]): number {
  let currMax = 1,
    currMin = 1;
  let result = Math.max(...nums);

  for (const n of nums) {
    if (n === 0) {
      currMax = 1;
      currMin = 1;
      continue;
    }
    const temp = currMax;
    currMax = Math.max(n * temp, n * currMin, n);
    currMin = Math.min(n * temp, n * currMin, n);
    result = Math.max(result, currMax);
  }

  return result;
}

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));
