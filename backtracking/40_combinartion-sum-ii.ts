function combinationSum2(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  candidates.sort((a, b) => a - b);

  function helper(i: number, curr: number[], total: number) {
    if (total === target) {
      result.push(curr.slice());
      return;
    }
    if (total > target || i >= candidates.length) return;

    curr.push(candidates[i]);
    helper(i + 1, curr, total + candidates[i]);

    while (i + 1 <= candidates.length && candidates[i] === candidates[i + 1]) {
      i++;
    }
    curr.pop();
    helper(i + 1, curr, total);
  }

  helper(0, [], 0);

  return result;
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
