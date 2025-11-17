function removeKdigits(num: string, k: number): string {
  const stack: string[] = [];

  for (let char of num) {
    while (stack.length > 0 && +stack[stack.length - 1] > +char && k > 0) {
      k--;
      stack.pop();
    }
    stack.push(char);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  let i = 0;
  while (i < stack.length && stack[i] === "0") {
    i++;
  }
  const res = stack.slice(i).join("");

  return res === "" ? "0" : res;
}

console.log(removeKdigits("1432219", 3));
console.log(removeKdigits("10200", 1));
console.log(removeKdigits("10", 2));
