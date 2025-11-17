function isValid(s: string): boolean {
  const stack: string[] = [];

  const mapParenthesis: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of s) {
    if (mapParenthesis[char]) {
      if (
        stack.length > 0 &&
        stack[stack.length - 1] === mapParenthesis[char]
      ) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
console.log(isValid("([)]"));
