function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  let commonPrefix = "";
  let minLength = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < strs.length; i++) {
    minLength = Math.min(minLength, strs[i].length);
  }

  for (let i = 0; i < minLength; i++) {
    let currentCharacter = strs[0][i];
    let flag = 0;

    for (let j = 1; j < strs.length; j++) {
      if (currentCharacter !== strs[j][i]) {
        flag = 1;
        break;
      }
    }

    if (flag === 1) break;

    commonPrefix += currentCharacter;
  }

  return commonPrefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
