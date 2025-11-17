function clearDigits(s: string): string {
  const stack: string[] = [];

  for (let c of s) {
    if (stack.length > 0 && isNaN(+stack[stack.length - 1]) && !isNaN(+c)) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.join("");
}

console.log(clearDigits("abc"));
console.log(clearDigits("cb34"));
