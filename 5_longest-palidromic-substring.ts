function longestPalindrome(s: string): string {
  const n = s.length;

  for (let i = n; i >= 1; i--) {
    for (let j = 0; j < n - i + 1; j++) {
      let l = j,
        r = j + i - 1;
      let flag = 1;
      while (l < r) {
        if (s[l] !== s[r]) {
          flag = 0;
          break;
        }
        l++;
        r--;
      }
      if (flag) return s.substring(j, j + i);
    }
  }
  return "";
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("ab"));
console.log(longestPalindrome("a"));
