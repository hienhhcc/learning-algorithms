// function findSubArray132pattern(nums: number[]): boolean {
// const n = nums.length;
// let l = 0;
// for (let r = 0; r < n; r++) {
//   if (r - l + 1 > 3) l++;
//   if (r - l + 1 === 3) {
//     if (nums[l] < nums[r] && nums[r - 1] > nums[r]) return true;
//   }
// }
// return false;
// }

function find132pattern(nums: number[]): boolean {
  const stack: { value: number; min: number }[] = [];
  let currMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    while (stack.length > 0 && nums[i] > stack[stack.length - 1].value) {
      stack.pop();
    }

    if (
      stack.length > 0 &&
      nums[i] < stack[stack.length - 1].value &&
      nums[i] > stack[stack.length - 1].min
    ) {
      return true;
    }

    currMin = Math.min(currMin, nums[i]);
    stack.push({ value: nums[i], min: currMin });
  }

  return false;
}

console.log(find132pattern([1, 2, 3, 4]));
console.log(find132pattern([3, 1, 4, 2]));
console.log(find132pattern([-1, 3, 2, 0]));
