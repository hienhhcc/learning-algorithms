function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  let chars: string[] = [];

  function dfs(openCount: number, closeCount: number) {
    if (openCount === n && closeCount === n) {
      result.push(chars.join(""));
      return;
    }

    if (openCount < n) {
      chars.push("(");
      dfs(openCount + 1, closeCount);
      chars.pop();
    }

    if (openCount > closeCount) {
      chars.push(")");
      dfs(openCount, closeCount + 1);
      chars.pop();
    }
  }

  dfs(0, 0);

  return result;
}

console.log(generateParenthesis(3));
console.log(generateParenthesis(1));
