function permuteUnique(nums: number[]): number[][] {
  const result: number[][] = [];
  const perm: number[] = [];

  const count: Record<number, number> = {};
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = (count[nums[i]] ?? 0) + 1;
  }

  function dfs() {
    if (perm.length === nums.length) {
      result.push(perm.slice());
      return;
    }

    for (const [key, val] of Object.entries(count)) {
      if (val > 0) {
        perm.push(+key);
        count[+key]--;

        dfs();

        perm.pop();
        count[+key]++;
      }
    }
  }

  dfs();

  return result;
}

console.log(permuteUnique([1, 1, 2]));
console.log(permuteUnique([1, 2, 3]));
