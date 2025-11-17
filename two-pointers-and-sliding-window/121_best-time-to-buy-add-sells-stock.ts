function maxProfit(prices: number[]): number {
  const n = prices.length;

  let result: number = 0;

  let l = 0,
    r = 1;

  while (r < n) {
    if (prices[l] > prices[r]) {
      l = r;
    } else {
      result = Math.max(result, prices[r] - prices[l]);
    }
    r++;
  }
  return result;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
