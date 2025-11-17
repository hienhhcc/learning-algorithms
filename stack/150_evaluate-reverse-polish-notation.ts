function evalRPN(tokens: string[]): number {
  const stack: string[] = [];

  for (let t of tokens) {
    if (["+", "-", "*", "/"].includes(t)) {
      const b = +stack.pop()!;
      const a = +stack.pop()!;
      if (t === "+") {
        stack.push((a + b).toString());
      } else if (t === "-") {
        stack.push((a - b).toString());
      } else if (t === "*") {
        stack.push((a * b).toString());
      } else if (t === "/") {
        stack.push(Math.trunc(a / b).toString());
      }
    } else {
      stack.push(t);
    }
  }

  return +stack[stack.length - 1];
}

console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
