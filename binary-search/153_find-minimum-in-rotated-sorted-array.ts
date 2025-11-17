function findMin(nums: number[]): number {
  const n = nums.length;

  let low = 0;
  let high = n - 1;
  let result = nums[0];

  while (low <= high) {
    if (nums[low] < nums[high]) {
      result = Math.min(result, nums[low]);
      break;
    }

    const mid = Math.floor((low + high) / 2);
    if (nums[mid] >= nums[low]) {
      result = Math.min(result, nums[low]);
      low = mid + 1;
    } else {
      result = Math.min(result, nums[mid]);
      high = mid - 1;
    }
  }
  return result;
}

console.log(findMin([3, 4, 5, 1, 2])); //1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); //0
console.log(findMin([11, 13, 15, 17])); //11
