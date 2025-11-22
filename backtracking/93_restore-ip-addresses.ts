function restoreIpAddresses(s: string): string[] {
  const n = s.length;

  const result: string[] = [];
  const parts: string[] = [];
  function helper(i: number) {
    if (i === n && parts.length === 4) {
      result.push(parts.join("."));
      return;
    }

    for (let j = i; j < i + 3 && j < s.length; j++) {
      const string = s.slice(i, j + 1);
      if (string[0] === "0" && string.length > 1) continue;

      if (+string >= 0 && +string <= 255) {
        parts.push(string);
        helper(j + 1);
        parts.pop();
      }
    }
  }

  helper(0);

  return result;
}

console.log(restoreIpAddresses("25525511135"));
console.log(restoreIpAddresses("0000"));
console.log(restoreIpAddresses("101023"));
