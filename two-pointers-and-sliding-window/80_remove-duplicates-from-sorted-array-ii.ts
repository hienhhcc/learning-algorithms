function removeDuplicates(nums: number[]): number {
  const n = nums.length;

  let l = 0,
    r = 0;
  while (r < n) {
    let count = 1;
    while (r + 1 < n && nums[r] === nums[r + 1]) {
      count++;
      r++;
    }

    const loopTimes = Math.min(2, count);

    for (let i = 0; i < loopTimes; i++) {
      nums[l] = nums[r];
      l++;
    }

    r++;
  }

  return l;
}

console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); // 5
// console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])); //7
