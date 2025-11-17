function longestConsecutive(nums: number[]): number {
  const n = nums.length;

  if (n === 0) return 0;

  const hashSet = new Set(nums);
  let longest: number = 1;

  for (let n of hashSet) {
    if (!hashSet.has(n - 1)) {
      let currLength = 0;
      while (hashSet.has(n + currLength)) {
        currLength++;
      }
      longest = Math.max(longest, currLength);
    }
  }

  return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([1, 0, 1, 2]));
