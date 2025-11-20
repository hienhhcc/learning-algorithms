function subsetsWithDup(nums: number[]): number[][] {
  const result: number[][] = [];
  const subset: number[] = [];
  nums.sort((a, b) => a - b);

  function helper(i: number) {
    if (i === nums.length) {
      result.push(subset.slice());
      return;
    }
    if (i > nums.length) return;

    subset.push(nums[i]);
    helper(i + 1);

    subset.pop();
    while (i + 1 <= nums.length && nums[i] === nums[i + 1]) {
      i++;
    }
    helper(i + 1);
  }

  helper(0);

  return result;
}

console.log(subsetsWithDup([1, 2, 2]));
console.log(subsetsWithDup([0]));
