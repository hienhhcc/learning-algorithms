function canConstruct(ransomNote: string, magazine: string): boolean {
  const ransomHashmap: Record<string, number> = {};
  const magazineHashmap: Record<string, number> = {};

  for (const c of ransomNote) {
    ransomHashmap[c] = (ransomHashmap[c] ?? 0) + 1;
  }

  for (const c of magazine) {
    magazineHashmap[c] = (magazineHashmap[c] ?? 0) + 1;
  }

  const keys = Object.keys(ransomHashmap);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (
      magazineHashmap[key] == null ||
      ransomHashmap[key] > magazineHashmap[key]
    )
      return false;
  }

  return true;
}

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));
