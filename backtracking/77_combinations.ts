function combine(n: number, k: number): number[][] {
  const result: number[][] = [];

  const subset: number[] = [];

  function helper(num: number) {
    if (subset.length === k) {
      result.push(subset.slice());
      return;
    }
    if (num > n) return;

    subset.push(num);
    helper(num + 1);

    subset.pop();
    helper(num + 1);
  }

  helper(1);

  return result;
}

console.log(combine(4, 2));
console.log(combine(1, 1));
