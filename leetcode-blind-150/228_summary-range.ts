function summaryRanges(nums: number[]): string[] {
  const n = nums.length;
  if (n === 0) return [];

  const result: string[] = [];

  let start = 0,
    end = 0;

  for (let i = 0; i < n; i++) {
    if (i !== 0 && nums[i - 1] + 1 !== nums[i]) {
      if (start === end) {
        result.push(`${nums[start]}`);
      } else {
        result.push(`${nums[start]}->${nums[end]}`);
      }
      start = i;
      end = i;
    } else {
      end = i;
    }
  }

  if (start === end) {
    result.push(`${nums[start]}`);
  } else {
    result.push(`${nums[start]}->${nums[end]}`);
  }

  return result;
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
