function takeCharacters(s: string, k: number): number {
  const n = s.length;

  //* Count the frequent of each character in s
  const count = { a: 0, b: 0, c: 0 };
  for (const c of s) {
    count[c]++;
  }

  //* Check the impossible case
  if (Math.min(count["a"], count["b"], count["c"]) < k) {
    return -1;
  }

  //* Sliding window
  // s = "aabaaaacaabc", k = 2
  // count = {a:8, b:2, c:2}
  // window = {a:6, b:0, c:0}
  let middle = { a: 0, b: 0, c: 0 };
  let maxWindow = 0;
  let l = 0;
  for (let r = 0; r < n; r++) {
    middle[s[r]]++;

    while (
      middle["a"] > count["a"] - k ||
      middle["b"] > count["b"] - k ||
      middle["c"] > count["c"] - k
    ) {
      middle[s[l]]--;
      l++;
    }

    maxWindow = Math.max(maxWindow, r - l + 1);
  }

  return n - maxWindow;
}

console.log(takeCharacters("aabaaaacaabc", 2));
console.log(takeCharacters("a", 1));
