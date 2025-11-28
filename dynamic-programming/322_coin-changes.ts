function coinChange(coins: number[], amount: number): number {
  const dp = Array.from({ length: amount + 1 }, () => amount + 1);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const c of coins) {
      if (i - c >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - c]);
      }
    }
  }

  return dp[amount] === amount + 1 ? -1 : dp[amount];
}

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 0));
