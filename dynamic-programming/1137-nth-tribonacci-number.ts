function tribonacci(n: number): number {
  const dp = [0, 1, 1];
  if (n <= 2) return dp[n];

  for (let i = 3; i <= n; i++) {
    const tempT2 = dp[2];
    const tempT1 = dp[1];
    dp[2] = dp[2] + dp[1] + dp[0];
    dp[1] = tempT2;
    dp[0] = tempT1;
  }

  return dp[2];
}

console.log(tribonacci(4));
console.log(tribonacci(25));
