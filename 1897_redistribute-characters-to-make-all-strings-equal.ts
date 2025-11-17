function makeEqual(words: string[]): boolean {
  const hashmap: Record<string, number> = {};
  for (const w of words) {
    for (const c of w) {
      hashmap[c] = (hashmap[c] ?? 0) + 1;
    }
  }

  const values = Object.values(hashmap);
  for (const v of values) {
    if (v % words.length !== 0) {
      return false;
    }
  }

  return true;
}

// console.log(makeEqual(["abc", "aabc", "bc"]));
console.log(makeEqual(["bb", "aacb", "bbbca"]));
// console.log(makeEqual(["ab", "a"]));
