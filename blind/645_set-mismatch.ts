function findErrorNums(nums: number[]): number[] {
  const n = nums.length;
  const map: Record<number, number> = {};

  for (let i = 1; i <= n; i++) {
    map[i] = 0;
  }

  for (let i = 0; i < n; i++) {
    map[nums[i]] = map[nums[i]] + 1;
  }

  let missingElement: number = -1,
    duplicateElement: number = -1;
  for (const [key, val] of Object.entries(map)) {
    if (val === 0) {
      missingElement = +key;
    } else if (val === 2) {
      duplicateElement = +key;
    }
  }

  return [duplicateElement, missingElement];
}

console.log(findErrorNums([1, 2, 2, 4]));
console.log(findErrorNums([1, 1]));
console.log(findErrorNums([2, 2]));
console.log(findErrorNums([1, 2, 2, 4]));
