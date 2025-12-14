function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (const word of strs) {
    const count = Array.from({ length: 26 }, () => 0);
    for (const c of word) {
      count[c.charCodeAt(0) - 97]++;
    }

    const key = count.join("#");
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key)!.push(word);
  }

  return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
