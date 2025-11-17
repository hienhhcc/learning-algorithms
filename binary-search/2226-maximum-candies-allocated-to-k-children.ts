function maximumCandies(candies: number[], k: number): number {
  const n = candies.length;

  function canServe(cap: number): boolean {
    let count = 0;

    for (let i = 0; i < n; i++) {
      count += Math.floor(candies[i] / cap);
    }

    return count >= k;
  }

  let low = 0,
    high = Math.max(...candies);
  let result = low;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    if (canServe(middle)) {
      low = middle + 1;
      result = middle;
    } else {
      high = middle - 1;
    }
  }

  return result;
}

console.log(maximumCandies([5, 8, 6], 3));
console.log(maximumCandies([2, 5], 11));
