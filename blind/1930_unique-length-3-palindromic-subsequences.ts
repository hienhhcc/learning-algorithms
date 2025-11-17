function countPalindromicSubsequence(s: string): number {
  const n = s.length;

  const map: Record<string, number> = {};

  for (let i = 0; i < n; i++) {
    const char = s[i];
    map[char] = (map[char] ?? 0) + 1;
  }

  let count = 0;

  for (let [key, val] of Object.entries(map)) {
    if (val >= 2) {
      let left = 0,
        right = n - 1;

      while (s[left] !== key) left++;
      while (s[right] !== key) right--;

      //*Count how many unique char between left and right
      let unique = new Set();
      for (let i = left + 1; i <= right - 1; i++) {
        unique.add(s[i]);
      }

      if (right - left > 1) {
        count += unique.size;
      }
    }
  }

  return count;
}

console.log(countPalindromicSubsequence("aabca"));
console.log(countPalindromicSubsequence("adc"));
console.log(countPalindromicSubsequence("bbcbaba"));
