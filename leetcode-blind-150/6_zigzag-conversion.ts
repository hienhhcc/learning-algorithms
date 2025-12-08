function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;

  const arrays: string[] = Array.from(
    { length: Math.min(numRows, s.length) },
    () => ""
  );
  let forward = false;
  let curr = 0;
  for (const ch of s) {
    arrays[curr] += ch;
    if (curr === 0 || curr === numRows - 1) forward = !forward;
    curr += forward ? 1 : -1;
  }

  return arrays.join("");
}

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("A", 1));
