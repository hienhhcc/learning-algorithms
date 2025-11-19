function subsets(nums: number[]): number[][] {
  const result: number[][] = [];

  const subset: number[] = [];

  function helper(i: number) {
    if (i >= nums.length) {
      result.push(subset.slice());
      return;
    }

    subset.push(nums[i]);
    helper(i + 1);

    subset.pop();
    helper(i + 1);
  }

  helper(0);

  return result;
}

console.log(subsets([1, 2, 3]));
console.log(subsets([0]));
