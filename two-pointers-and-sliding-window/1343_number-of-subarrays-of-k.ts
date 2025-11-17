function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  const n = arr.length;
  let result = 0;
  let prefixSum = 0;

  let l = 0;
  for (let r = 0; r < n; r++) {
    if (r - l + 1 > k) {
      prefixSum -= arr[l];
      l++;
    }
    prefixSum += arr[r];

    if (r - l + 1 === k) {
      const average = prefixSum / k;
      if (average >= threshold) result++;
    }
  }

  return result;
}

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4));
console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5));
