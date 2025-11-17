/*
  Minimize maximize -> Hint to binary search
  Check feasability -> If we can form p pairs with a value cap. Surely we can form p pairs with a value bigger than cap -> Monotonic
  Need to define a canForm(cap: number) to check if with that cap can we form p pairs.
    - If can, we can decrease the search range since we need to find the minimum
    - If not, we increase the search range
*/
function minimizeMax(nums: number[], p: number): number {
  nums.sort((a, b) => a - b);
  function canForm(difference: number) {
    let count = 0;
    let i = 0;

    while (i < nums.length) {
      if (Math.abs(nums[i + 1] - nums[i]) <= difference) {
        count++;
        i += 2;
      } else {
        i++;
      }
    }

    return count >= p;
  }

  let low = 0;
  let high = Math.max(...nums) - Math.min(...nums);
  let answer;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    if (canForm(middle)) {
      answer = middle;
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return answer;
}

console.log(minimizeMax([10, 1, 2, 7, 1, 3], 2)); //1
console.log(minimizeMax([4, 2, 1, 2], 1)); //0
