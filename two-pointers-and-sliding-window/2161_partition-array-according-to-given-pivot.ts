// function pivotArray(nums: number[], pivot: number): number[] {
//   const left: number[] = [];
//   const right: number[] = [];
//   const middle: number[] = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < pivot) {
//       left.push(nums[i]);
//     } else if (nums[i] === pivot) {
//       middle.push(nums[i]);
//     } else {
//       right.push(nums[i]);
//     }
//   }

//   return left.concat(middle).concat(right);
// }
function pivotArray(nums: number[], pivot: number): number[] {
  const n = nums.length;
  const result: number[] = Array.from({ length: n }, () => 0);
  let i = 0,
    j = n - 1;
  let i2 = 0,
    j2 = n - 1;

  while (i < n) {
    if (nums[i] < pivot) {
      result[i2++] = nums[i];
    }
    if (nums[j] > pivot) {
      result[j2--] = nums[j];
    }
    i++;
    j--;
  }

  while (i2 <= j2) {
    result[i2++] = pivot;
    result[j2--] = pivot;
  }
  return result;
}

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10));
console.log(pivotArray([-3, 4, 3, 2], 2));
