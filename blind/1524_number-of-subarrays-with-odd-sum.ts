function numOfSubarrays(arr: number[]): number {
  const mod = Math.pow(10, 9) + 7;
  const n = arr.length;
  let result = 0,
    currSum = 0;
  let prefixEven = 1,
    prefixOdd = 0;

  for (let i = 0; i < n; i++) {
    currSum += arr[i];
    if (currSum % 2 === 0) {
      result += prefixOdd;
    } else {
      result += prefixEven;
    }

    if (currSum % 2 === 0) prefixEven++;
    else prefixOdd++;
  }

  return result % mod;
}

console.log(numOfSubarrays([1, 3, 5]));
console.log(numOfSubarrays([2, 4, 6]));
console.log(numOfSubarrays([1, 2, 3, 4, 5, 6, 7]));
