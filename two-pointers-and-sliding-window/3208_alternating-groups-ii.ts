function numberOfAlternatingGroups(colors: number[], k: number): number {
  const n = colors.length;
  let result = 0;

  let l = 0;
  for (let r = 1; r < n + k - 1; r++) {
    if (r - l + 1 > k) {
      l++;
    }

    if (colors[r % n] === colors[(r - 1) % n]) {
      l = r;
    }

    if (r - l + 1 === k) {
      result++;
    }
  }
  return result;
}

console.log(numberOfAlternatingGroups([0, 1, 0, 1, 0], 3));
console.log(numberOfAlternatingGroups([0, 1, 0, 0, 1, 0, 1], 6));
console.log(numberOfAlternatingGroups([1, 1, 0, 1], 4));
