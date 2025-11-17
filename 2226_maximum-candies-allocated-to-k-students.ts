function maximumCandies(candies: number[], k: number): number {
  function canServe(x: number) {
    let count = 0;

    for (const c of candies) {
      count += Math.floor(c / x);
      if (count >= k) return true;
    }

    return false;
  }

  let low = 1;
  let high = Math.max(...candies);
  let ans = 0;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);

    if (canServe(middle)) {
      ans = middle;
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }

  return ans;
}

console.log(maximumCandies([5, 8, 6], 3));
console.log(maximumCandies([2, 5], 11));
