function letterCombinations(digits: string): string[] {
  const map: Record<number, string[]> = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const result: string[] = [];
  const parts: string[] = [];

  function backtrack(i: number) {
    if (i === digits.length) {
      result.push(parts.join(""));
      return;
    }

    const chars = map[+digits[i]];
    for (let j = 0; j < chars.length; j++) {
      parts.push(chars[j]);
      backtrack(i + 1);
      parts.pop();
    }
  }

  backtrack(0);

  return result;
}

console.log(letterCombinations("23"));
console.log(letterCombinations("2"));
