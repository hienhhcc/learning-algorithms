function singleNonDuplicate(nums: number[]): number {
  const n = nums.length;
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    if (
      nums[middle] !== nums[middle - 1] &&
      nums[middle] !== nums[middle + 1]
    ) {
      return nums[middle];
    }

    if (nums[middle] === nums[middle + 1]) {
      const lengthAfterMiddleNumber = high - middle - 1;
      if (lengthAfterMiddleNumber & 1) {
        low = middle + 2;
      } else {
        high = middle - 1;
      }
    }

    if (nums[middle] === nums[middle - 1]) {
      const lengthAfterMiddleNumber = high - middle;
      if (lengthAfterMiddleNumber & 1) {
        low = middle + 1;
      } else {
        high = middle - 2;
      }
    }
  }

  return -1;
}

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));
