function firstUniqChar(s: string): number {
  const map = new Map();

  for (let char of s) {
    map.set(char, (map.get(char) ?? 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map.get(char) === 1) {
      return i;
    }
  }

  return -1;
}

console.log(firstUniqChar("dddccdbba"));
console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));
