function majorityElement(nums: number[]): number {
  const hashmap: Record<number, number> = {};
  let currentMax = 0;
  let majorityElement;

  for (const n of nums) {
    hashmap[n] = (hashmap[n] ?? 0) + 1;

    if (hashmap[n] > currentMax) {
      currentMax = Math.max(currentMax, hashmap[n]);
      majorityElement = n;
    }
  }

  return majorityElement;
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
