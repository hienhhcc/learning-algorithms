function numberOfSubarrays(nums: number[], k: number): number {
  nums = nums.map((n) => n % 2);

  const n = nums.length;
  const prefix: Record<number, number> = { 0: 1 };
  let sum = 0;
  let result: number = 0;

  for (const number of nums) {
    sum += number;
    const diff = sum - k;

    result += prefix[diff] ?? 0;
    prefix[sum] = (prefix[sum] ?? 0) + 1;
  }

  return result;
}

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3));
console.log(numberOfSubarrays([2, 4, 6], 1));
console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
