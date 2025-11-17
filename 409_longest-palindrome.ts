function longestPalindrome(s: string): number {
  const hashmap: Record<string, number> = {};

  for (const c of s) {
    hashmap[c] = (hashmap[c] ?? 0) + 1;
  }
  let flag = false;
  let result = 0;

  for (const val of Object.values(hashmap)) {
    if (val % 1) {
      flag = true;
      continue;
    }

    if (val & 1) {
      result += val - 1;
      flag = true;
    } else {
      result += val;
    }
  }

  if (flag) {
    result++;
  }

  return result;
}

console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("a"));
