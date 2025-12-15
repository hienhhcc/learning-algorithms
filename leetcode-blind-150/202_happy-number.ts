function isHappy(n: number): boolean {
  const numSet = new Set<number>();

  numSet.add(n);
  let curr = n;
  let total = 0;
  while (true) {
    for (const char of curr.toString()) {
      total += Math.pow(Number(char), 2);
    }

    curr = total;
    total = 0;

    if (curr === 1) return true;

    if (numSet.has(curr)) return false;

    numSet.add(curr);
  }
}

console.log(isHappy(19));
console.log(isHappy(2));
