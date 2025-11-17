function subarraySum(nums: number[], k: number): number {
  const n = nums.length;
  let count = 0;

  let sum = 0;
  const prefix: Record<number, number> = { 0: 1 };
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    const diff = sum - k;

    count += prefix[diff] ?? 0;
    prefix[sum] = (prefix[sum] ?? 0) + 1;
  }

  return count;
}

console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));
