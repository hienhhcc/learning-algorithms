function commonChars(words: string[]): string[] {
  if (words.length === 0) {
    return [];
  }

  const map: Record<string, number> = {};

  for (let i = 0; i < words[0].length; i++) {
    const char = words[0][i];
    map[char] = (map[char] ?? 0) + 1;
  }

  for (let i = 1; i < words.length; i++) {
    const w = words[i];
    const currMap: Record<string, number> = {};

    for (let i = 0; i < w.length; i++) {
      const char = w[i];
      currMap[char] = (currMap[char] ?? 0) + 1;
    }

    for (const [key, val] of Object.entries(map)) {
      map[key] = Math.min(map[key], currMap[key]);
    }
  }

  const result: string[] = [];
  for (const [key, val] of Object.entries(map)) {
    for (let i = 1; i <= val; i++) {
      result.push(key);
    }
  }
  return result;
}

console.log(commonChars(["bella", "label", "roller"]));
console.log(commonChars(["cool", "lock", "cook"]));
