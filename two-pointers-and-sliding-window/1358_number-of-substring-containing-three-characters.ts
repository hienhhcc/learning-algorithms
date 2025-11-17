function numberOfSubstrings(s: string): number {
  const map: Record<string, number> = { a: 0, b: 0, c: 0 };

  const n = s.length;
  let result: number = 0;

  let l = 0;
  for (let r = 0; r < n; r++) {
    map[s[r]] += 1;

    while (isValid(map)) {
      result += n - r;
      map[s[l]] -= 1;
      l++;
    }
  }

  return result;
}

function isValid(map: Record<string, number>): boolean {
  return map["a"] >= 1 && map["b"] >= 1 && map["c"] >= 1;
}

console.log(numberOfSubstrings("abcabc"));
console.log(numberOfSubstrings("aaacb"));
console.log(numberOfSubstrings("abc"));
