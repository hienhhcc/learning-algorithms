function lengthOfLongestSubstring(s: string): number {
  const n = s.length;
  const hashSet = new Set();

  let longest = 0;

  let l = 0;
  for (let r = 0; r < n; r++) {
    while (hashSet.has(s[r])) {
      hashSet.delete(s[l]);
      l++;
    }

    hashSet.add(s[r]);

    longest = Math.max(longest, r - l + 1);
  }

  return longest;
}

// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
