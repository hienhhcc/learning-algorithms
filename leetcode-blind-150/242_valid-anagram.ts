function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const sHashmap: Record<string, number> = {};
  const tHashmap: Record<string, number> = {};

  for (const c of s) {
    sHashmap[c] = (sHashmap[c] ?? 0) + 1;
  }
  for (const c of t) {
    tHashmap[c] = (tHashmap[c] ?? 0) + 1;
  }

  for (const key of Object.keys(sHashmap)) {
    if (sHashmap[key] !== tHashmap[key]) return false;
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("a", "ab"));
