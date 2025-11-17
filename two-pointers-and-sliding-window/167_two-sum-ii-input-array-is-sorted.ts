function twoSum(numbers: number[], target: number): number[] {
  const n = numbers.length;

  let l = 0,
    r = n - 1;
  while (l < r) {
    if (numbers[l] + numbers[r] === target) return [l + 1, r + 1];

    if (numbers[l] + numbers[r] > target) r--;
    else l++;
  }

  return [-1, -1];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
