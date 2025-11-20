function permute(nums: number[]): number[][] {
  if (nums.length === 0) return [[]];

  const perms = permute(nums.slice(1));
  const res = [];
  for (const p of perms) {
    for (let i = 0; i <= p.length; i++) {
      const pCopy = [...p];
      pCopy.splice(i, 0, nums[0]);
      res.push(pCopy);
    }
  }
  return res;
}

console.log(permute([1, 2, 3]));
console.log(permute([0, 1]));
console.log(permute([1]));
