function isValid(s: string): boolean {
  const stack: string[] = [];

  const map: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of s) {
    if (map[char] != null) {
      const topOfStack = stack.pop();
      if (topOfStack !== map[char as ")" | "]" | "}"]) {
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
