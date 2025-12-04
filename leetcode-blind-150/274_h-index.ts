function hIndex(citations: number[]): number {
  const n = citations.length;
  citations.sort((a, b) => b - a);
  let h = 0;
  for (let i = 0; i < n; i++) {
    if (citations[i] >= i + 1) h = i + 1;
    else break;
  }

  return h;
}

console.log(hIndex([3, 0, 6, 1, 5]));
console.log(hIndex([1, 3, 1]));
