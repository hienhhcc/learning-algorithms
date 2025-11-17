function maxProfit(prices: number[]): number {
  const n = prices.length;

  let maxProfit = 0;

  let l = 0;
  let r;
  let holding = false;
  for (r = 1; r < n; r++) {
    if (prices[r] < prices[r - 1]) {
      if (holding) {
        maxProfit += prices[r - 1] - prices[l];
        holding = false;
      }
      l = r;
    } else {
      holding = true;
    }
  }

  if (holding) {
    maxProfit += prices[r - 1] - prices[l];
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
