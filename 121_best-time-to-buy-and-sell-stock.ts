function maxProfit(prices: number[]): number {
  const n = prices.length;
  let max = 0;

  let l = 0;
  for (let r = 1; r < n; r++) {
    max = Math.max(max, prices[r] - prices[l]);
    if (prices[r] < prices[l]) {
      l = r;
    }
  }

  return max;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
