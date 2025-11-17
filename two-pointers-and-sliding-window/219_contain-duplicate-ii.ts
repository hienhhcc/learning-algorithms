function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const n = nums.length;

  let l = 0;
  const hashSet = new Set();

  for (let r = 0; r < n; r++) {
    if (r - l > k) {
      hashSet.delete(nums[l]);
      l++;
    }
    if (hashSet.has(nums[r])) return true;
    hashSet.add(nums[r]);
  }

  return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
