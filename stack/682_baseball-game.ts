function calPoints(operations: string[]): number {
  const n = operations.length;
  const stack: number[] = [];

  for (let o of operations) {
    if (o === "C") {
      stack.pop();
    } else if (o === "D") {
      stack.push(stack[stack.length - 1] * 2);
    } else if (o === "+") {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    } else {
      stack.push(+o);
    }
  }

  return stack.reduce((prev, curr) => prev + curr, 0);
}

console.log(calPoints(["5", "2", "C", "D", "+"]));
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
console.log(calPoints(["1", "C"]));
