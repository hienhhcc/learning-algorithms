function decodeString(s: string): string {
  const stack: string[] = [];

  for (let char of s) {
    if (char === "]") {
      let bracketString = "";
      while (stack[stack.length - 1] !== "[") {
        bracketString = stack.pop()! + bracketString;
      }
      stack.pop();
      let multiplier = "";
      while (!isNaN(+stack[stack.length - 1])) {
        multiplier = stack.pop()! + multiplier;
      }
      stack.push(bracketString.repeat(+multiplier));
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}

console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));
console.log(decodeString("2[abc]3[cd]ef"));
