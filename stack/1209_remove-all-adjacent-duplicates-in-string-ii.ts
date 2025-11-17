function removeDuplicates(s: string, k: number): string {
  const stack: { char: string; count: number }[] = [];

  for (const char of s) {
    if (stack.length > 0 && stack[stack.length - 1].char === char) {
      stack[stack.length - 1].count++;
      if (stack[stack.length - 1].count === k) {
        stack.pop();
      }
    } else {
      stack.push({ char, count: 1 });
    }
  }

  return stack.map((s) => s.char.repeat(s.count)).join("");
}

console.log(removeDuplicates("abcd", 2));
console.log(removeDuplicates("deeedbbcccbdaa", 3));
console.log(removeDuplicates("pbbcggttciiippooaais", 2));
