function isVowel(character: string) {
  return ["a", "i", "o", "e", "u"].includes(character);
}

function maxVowels(s: string, k: number): number {
  const n = s.length;
  let max = 0;
  let count = 0;

  let l = 0;
  for (let r = 0; r < n; r++) {
    count += isVowel(s[r]) ? 1 : 0;

    while (r - l + 1 > k) {
      count -= isVowel(s[l]) ? 1 : 0;
      l++;
    }

    if (r - l + 1 === k) {
      max = Math.max(max, count);
    }
  }

  return max;
}

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("leetcode", 3));
