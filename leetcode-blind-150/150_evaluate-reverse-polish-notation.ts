function evalRPN(tokens: string[]): number {
  const operations = ["+", "-", "*", "/"];
  const stack: string[] = [];

  for (const char of tokens) {
    if (operations.includes(char)) {
      const secondNum = +stack.pop()!;
      const firstNum = +stack.pop()!;

      if (char === "+") {
        stack.push((firstNum + secondNum).toString());
      } else if (char === "-") {
        stack.push((firstNum - secondNum).toString());
      } else if (char === "*") {
        stack.push((firstNum * secondNum).toString());
      } else if (char === "/") {
        stack.push(Math.trunc(firstNum / secondNum).toString());
      }
    } else {
      stack.push(char);
    }
  }

  return Number(stack[0]);
}

console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
