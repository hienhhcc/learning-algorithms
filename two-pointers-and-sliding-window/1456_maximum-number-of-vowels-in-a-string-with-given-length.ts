function maxVowels(s: string, k: number): number {
  const n = s.length;

  let countVowel = 0;
  let result: number = 0;

  let l = 0;
  for (let r = 0; r < n; r++) {
    if (r - l + 1 > k) {
      if (isVowel(s[l])) countVowel--;
      l++;
    }

    if (isVowel(s[r])) countVowel++;

    if (r - l + 1 === k) {
      result = Math.max(result, countVowel);
    }
  }

  return result;
}

function isVowel(char: string) {
  return ["a", "e", "i", "o", "u"].includes(char);
}

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("leetcode", 3));
