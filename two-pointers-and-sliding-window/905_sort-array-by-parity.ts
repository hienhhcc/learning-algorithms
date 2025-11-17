function sortArrayByParity(nums: number[]) {
  function isEven(num: number) {
    return !(num & 1);
  }

  const n = nums.length;

  let l = 0,
    r = n - 1;

  while (l < r) {
    if (isEven(nums[l])) {
      l++;
    } else if (isEven(nums[r])) {
      const temp = nums[l];
      nums[l] = nums[r];
      nums[r] = temp;
      l++;
      r--;
    } else {
      r--;
    }
  }

  return nums;
}

console.log(sortArrayByParity([3, 1, 2, 4])); //[2,4,3,1]
console.log(sortArrayByParity([0])); //[0]
