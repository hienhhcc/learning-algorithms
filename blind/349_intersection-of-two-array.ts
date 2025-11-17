function intersection(nums1: number[], nums2: number[]): number[] {
  const set = new Set();

  for (let n of nums1) {
    set.add(n);
  }

  const resultSet = new Set<number>();
  for (let n of nums2) {
    if (set.has(n)) resultSet.add(n);
  }

  return Array.from(resultSet);
}

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
