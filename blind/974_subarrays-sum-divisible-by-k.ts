function subarraysDivByK(nums: number[], k: number): number {
  let count = 0;

  const n = nums.length;

  const prefix: Record<number, number> = { 0: 1 };

  let prefixSum = 0;
  for (let i = 0; i < n; i++) {
    prefixSum += nums[i];
    const remainder = ((prefixSum % k) + k) % k;

    count += prefix[remainder] ?? 0;
    prefix[remainder] = (prefix[remainder] ?? 0) + 1;
  }

  return count;
}

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5));
console.log(subarraysDivByK([5], 9));
