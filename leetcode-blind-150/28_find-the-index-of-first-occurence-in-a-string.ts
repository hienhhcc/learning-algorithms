function strStr(haystack: string, needle: string): number {
  if (needle === "") return 0;

  const n = haystack.length;
  const m = needle.length;

  for (let i = 0; i < n - m + 1; i++) {
    const substring = haystack.substring(i, i + m);
    if (substring === needle) return i;
  }

  return -1;
}

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
