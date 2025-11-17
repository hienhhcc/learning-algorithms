function specialArray(nums: number[]): number {
  const n = nums.length;

  for (let i = 0; i <= n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (nums[j] >= i) {
        count++;
      }
    }

    if (count === i) return i;
  }

  return -1;
}

console.log(specialArray([3, 5]));
console.log(specialArray([0, 0]));
console.log(specialArray([0, 4, 3, 0, 4]));
