function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];

  function helper(i: number, curr: number[], total: number) {
    if (total === target) {
      result.push(curr.slice());
      return;
    }
    if (i >= candidates.length || total > target) return;

    curr.push(candidates[i]);
    helper(i, curr, total + candidates[i]);

    curr.pop();
    helper(i + 1, curr, total);
  }

  helper(0, [], 0);

  return result;
}

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
console.log(combinationSum([2], 1));
