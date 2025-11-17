function majorityElement(nums: number[]): number[] {
  const n = nums.length;
  const conditionNumber = n / 3;
  const hashmap: Record<number, number> = {};
  const elements = new Set<number>();

  for (const n of nums) {
    hashmap[n] = (hashmap[n] ?? 0) + 1;

    if (hashmap[n] > conditionNumber) {
      elements.add(n);
    }
  }

  return [...elements];
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([1]));
console.log(majorityElement([1, 2]));
