function numTilePossibilities(tiles: string): number {
  let result = 0;

  const count: Record<string, number> = {};

  for (const t of tiles) {
    count[t] = (count[t] ?? 0) + 1;
  }

  function helper(curr: string) {
    if (curr.length === tiles.length) return;

    for (const [key, val] of Object.entries(count)) {
      if (val > 0) {
        count[key]--;
        result++;
        helper(curr + key);
        count[key]++;
      }
    }
  }

  helper("");

  return result;
}

console.log(numTilePossibilities("AAB"));
console.log(numTilePossibilities("AAABBC"));
console.log(numTilePossibilities("V"));
