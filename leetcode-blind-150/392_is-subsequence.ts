function isSubsequence(s: string, t: string): boolean {
  let l = 0,
    r = 0;

  while (l < s.length && r < t.length) {
    if (s[l] !== t[r]) {
      r++;
    } else {
      l++;
      r++;
    }
  }

  return l === s.length;
}

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
