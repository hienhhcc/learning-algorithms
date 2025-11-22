function getHappyString(n: number, k: number): string {
  const chars: string[] = ["a", "b", "c"];

  const happyStrings: string[] = [];
  const parts: string[] = [];

  function backtrack(i: number) {
    if (i === n) {
      happyStrings.push(parts.join(""));
      return;
    }

    for (let j = 0; j < 3; j++) {
      const c = chars[j];
      if (i - 1 >= 0 && parts[i - 1] === c) continue;
      parts.push(c);
      backtrack(i + 1);
      parts.pop();
    }
  }

  backtrack(0);

  return happyStrings[k - 1] ?? "";
}

console.log(getHappyString(1, 3));
console.log(getHappyString(1, 4));
console.log(getHappyString(3, 9));
