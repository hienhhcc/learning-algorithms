function searchRange(nums: number[], target: number): number[] {
  const n = nums.length;

  let l = 0;
  let r = n - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (nums[m] === target) {
      let firstPosition = m;
      while (firstPosition > 0 && nums[firstPosition - 1] === nums[m]) {
        firstPosition--;
      }
      let lastPosition = m;
      while (lastPosition < n - 1 && nums[lastPosition + 1] === nums[m]) {
        lastPosition++;
      }
      return [firstPosition, lastPosition];
    }

    if (nums[m] < target) {
      l = m + 1;
    } else if (nums[m] > target) {
      r = m - 1;
    }
  }

  return [-1, -1];
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([1], 1));
console.log(searchRange([3, 3, 3], 3));
console.log(searchRange([], 0));
