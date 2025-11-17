function minimumIndex(nums: number[]): number {
  const n = nums.length;
  let dominant = -1;
  let max = 0;

  const hashmap = {};
  for (const n of nums) {
    hashmap[n] = (hashmap[n] ?? 0) + 1;
    if (hashmap[n] > max) {
      max = hashmap[n];
      dominant = n;
    }
  }

  let prefixCount = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === dominant) {
      prefixCount++;
    }

    const leftLength = i + 1;

    const rightLength = n - i - 1;
    const postfixCount = max - prefixCount;

    if (prefixCount > leftLength / 2 && postfixCount > rightLength / 2) {
      return i;
    }
  }

  return -1;
}

console.log(minimumIndex([1, 2, 2, 2])); //2
console.log(minimumIndex([2, 1, 3, 1, 1, 1, 7, 1, 2, 1])); //4
console.log(minimumIndex([3, 3, 3, 3, 7, 2, 2])); //-1
