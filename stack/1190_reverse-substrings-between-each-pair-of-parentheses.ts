function reverseParentheses(s: string): string {
  if (s.length === 0) {
    return "";
  }

  const stack: string[] = [];

  for (let char of s) {
    if (char === ")") {
      let bracketString = "";
      while (stack[stack.length - 1] !== "(") {
        bracketString = bracketString + stack.pop()!;
      }
      stack.pop();
      stack.push(...bracketString);
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
}

console.log(reverseParentheses("(abcd)"));
console.log(reverseParentheses("(u(love)i)"));
console.log(reverseParentheses("(ed(et(oc))el)"));
