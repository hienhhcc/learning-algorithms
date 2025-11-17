function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;

  const result: number[] = Array.from({ length: n }, () => 1);

  let previousCal = 1;
  for (let i = 0; i < n; i++) {
    result[i] *= previousCal;
    previousCal *= nums[i];
  }

  previousCal = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= previousCal;
    previousCal *= nums[i];
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
