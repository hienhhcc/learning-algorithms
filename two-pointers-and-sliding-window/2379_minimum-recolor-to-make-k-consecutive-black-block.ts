function minimumRecolors(blocks: string, k: number): number {
  const n = blocks.length;

  let l = 0;
  let result: number = n;
  let countWhite = 0;

  for (let r = 0; r < n; r++) {
    if (blocks[r] === "W") countWhite++;

    if (r - l + 1 > k) {
      countWhite = blocks[l] === "W" ? countWhite - 1 : countWhite;
      l++;
    }

    if (r - l + 1 === k) {
      result = Math.min(result, countWhite);
    }
  }

  return result;
}

console.log(minimumRecolors("WBBWWBBWBW", 7));
console.log(minimumRecolors("WBWBBBW", 2));
