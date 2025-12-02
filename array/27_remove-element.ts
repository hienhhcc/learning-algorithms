function removeElement(nums: number[], val: number): number {
  let countEqualVal = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = -1;
      countEqualVal++;
    }
  }

  nums.sort((a, b) => b - a);

  return nums.length - countEqualVal;
}

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
