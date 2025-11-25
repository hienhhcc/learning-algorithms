function rob1(nums: number[]): number {
  let prev1 = 0;
  let prev2 = 0;

  for (let n of nums) {
    const temp = prev1;
    prev1 = Math.max(prev2 + n, prev1);
    prev2 = temp;
  }

  return prev1;
}

function rob2(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  return Math.max(
    rob1(nums.slice(0, nums.length - 1)),
    rob1(nums.slice(1, nums.length))
  );
}

console.log(rob2([2, 3, 2, 3, 4]));
console.log(rob2([1, 2, 3, 1]));
console.log(rob2([1, 2, 3]));
