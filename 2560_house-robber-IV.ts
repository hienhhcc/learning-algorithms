function minCapability(nums: number[], k: number): number {
  function canRob(cap: number) {
    let count = 0;
    let i = 0;

    while (i < nums.length) {
      if (nums[i] <= cap) {
        count++;
        i += 2;
      } else {
        i++;
      }
    }

    return count >= k;
  }

  let low = Math.min(...nums);
  let high = Math.max(...nums);
  let answer = high;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (canRob(mid)) {
      answer = Math.min(answer, mid);
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return answer;
}

console.log(minCapability([2, 3, 5, 9], 2));
console.log(minCapability([2, 7, 9, 3, 1], 2));
