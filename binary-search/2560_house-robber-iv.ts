function minCapability(nums: number[], k: number): number {
  const n = nums.length;

  function canRobKHouses(cap: number): boolean {
    let countHouses = 0;
    let i = 0;

    while (i < n) {
      if (nums[i] <= cap) {
        countHouses++;
        i += 2;
      } else {
        i++;
      }
    }

    return countHouses >= k;
  }

  let low = Math.min(...nums);
  let high = Math.max(...nums);
  let result = high;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);

    if (canRobKHouses(middle)) {
      result = middle;
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return result;
}

console.log(minCapability([2, 3, 5, 9], 2));
console.log(minCapability([2, 7, 9, 3, 1], 2));
