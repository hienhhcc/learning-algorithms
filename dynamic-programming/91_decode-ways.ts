function numDecodings(s: string): number {
  const n = s.length;

  const dp = Array.from({ length: s.length }, () => 0);

  dp[n] = 1;

  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === "0") dp[i] = 0;
    else dp[i] += dp[i + 1];

    if (i + 1 < n && (s[i] === "1" || (s[i] === "2" && +s[i + 1] <= 6))) {
      dp[i] += dp[i + 2];
    }
  }

  return dp[0];
}

console.log(numDecodings("12"));
console.log(numDecodings("226"));
console.log(numDecodings("06"));
console.log(numDecodings("10"));
