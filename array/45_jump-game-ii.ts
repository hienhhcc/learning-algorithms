function jump(nums: number[]): number {
  const n = nums.length;
  let jumps = 0;
  let end = 0;
  let farthest = 0;

  for (let i = 0; i < n - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    if (i === end) {
      jumps++;
      end = farthest;
    }
  }

  return jumps;
}

console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 3, 0, 1, 4]));
