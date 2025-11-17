function missingNumber(nums: number[]): number {
  const n = nums.length;
  const numsSet = new Set(nums);

  for (let i = 0; i <= n; i++) {
    if (!numsSet.has(i)) {
      return i;
    }
  }

  return -1;
}

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
