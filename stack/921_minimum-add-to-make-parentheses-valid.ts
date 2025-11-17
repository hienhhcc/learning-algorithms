function minAddToMakeValid(s: string): number {
  let result = 0;
  let count = 0;

  for (let c of s) {
    if (c === "(") count++;
    else {
      if (count === 0) {
        result += 1;
      }
      count = Math.max(count - 1, 0);
    }
  }

  return result + count;
}

console.log(minAddToMakeValid("())"));
console.log(minAddToMakeValid("((("));
