function makeGood(s: string): string {
  const n = s.length;
  const stack: string[] = [];

  for (let i = 0; i < n; i++) {
    if (stack.length > 0 && isCharEqual(stack[stack.length - 1], s[i])) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join("");
}

function isCharEqual(char1: string, char2: string): boolean {
  return Math.abs(char1.charCodeAt(0) - char2.charCodeAt(0)) === 32;
}

console.log(makeGood("leEeetcode"));
console.log(makeGood("abBAcC"));
console.log(makeGood("s"));
