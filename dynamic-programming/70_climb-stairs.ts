function climbStairs(n: number): number {
  if (n === 1) return 1;

  const dp = [1, 2];
  for (let i = n - 2; i > 0; i--) {
    const temp = dp[1];
    dp[1] = dp[0] + dp[1];
    dp[0] = temp;
  }
  return dp[1];
}

console.log(climbStairs(2));
console.log(climbStairs(3));
