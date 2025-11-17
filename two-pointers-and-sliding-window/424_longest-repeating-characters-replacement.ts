function characterReplacement(s: string, k: number): number {
  const map: Record<string, number> = {};

  const n = s.length;
  let result = 0;
  let maxf = 0;

  let l = 0;
  for (let r = 0; r < n; r++) {
    map[s[r]] = (map[s[r]] ?? 0) + 1;
    maxf = Math.max(maxf, map[s[r]]);

    while (r - l + 1 - maxf > k) {
      map[s[l]]--;
      l++;
    }

    result = Math.max(result, r - l + 1);
  }

  return result;
}

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));
