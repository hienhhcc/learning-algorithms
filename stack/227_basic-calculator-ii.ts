function calculate(s: string): number {
  s = s.replace(/\s+/g, "");

  const stack: number[] = [];
  let num = 0;
  let op = "+";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (/\d/.test(char)) {
      num = num * 10 + Number(char);
    }
    if (!/\d/.test(char) || i === s.length - 1) {
      if (op === "+") {
        stack.push(num);
      } else if (op === "-") {
        stack.push(-num);
      } else if (op === "*") {
        stack.push(stack.pop()! * num);
      } else {
        stack.push(Math.trunc(stack.pop()! / num));
      }
      op = char;
      num = 0;
    }
  }

  return stack.reduce((prev, curr) => prev + curr, 0);
}

console.log(calculate("3+22*2"));
console.log(calculate(" 3/2 "));
console.log(calculate(" 3+5 / 2 "));
