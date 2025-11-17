function equalSubstring(s: string, t: string, maxCost: number): number {
  const n = s.length;
  let result = 0;

  let diff: Record<number, number> = {};
  for (let i = 0; i < n; i++) {
    diff[i] = Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
  }

  let currCost = 0;
  let l = 0;
  for (let r = 0; r < n; r++) {
    currCost += diff[r];

    while (currCost > maxCost) {
      currCost -= diff[l];
      l++;
    }

    result = Math.max(result, r - l + 1);
  }

  return result;
}

console.log(equalSubstring("abcd", "bcdf", 3));
console.log(equalSubstring("abcd", "cdef", 3));
console.log(equalSubstring("abcd", "acde", 0));
