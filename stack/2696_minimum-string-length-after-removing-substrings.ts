function minLength(s: string): number {
  const stack: string[] = [];

  for (let c of s) {
    if (
      stack.length > 0 &&
      ((c === "B" && stack[stack.length - 1] === "A") ||
        (c === "D" && stack[stack.length - 1] === "C"))
    ) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.length;
}

console.log(minLength("ABFCACDB"));
console.log(minLength("ACBBD"));
