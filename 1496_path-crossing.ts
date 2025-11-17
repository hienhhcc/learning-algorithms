function isPathCrossing(path: string): boolean {
  const hashSet = new Set();
  hashSet.add("0.0");
  let x = 0;
  let y = 0;

  for (const p of path) {
    if (p === "N") {
      y++;
    } else if (p === "S") {
      y--;
    } else if (p === "W") {
      x--;
    } else {
      x++;
    }

    if (hashSet.has(`${x}.${y}`)) {
      return true;
    }
    hashSet.add(`${x}.${y}`);
  }

  return false;
}

console.log(isPathCrossing("NES"));
console.log(isPathCrossing("NESWW"));
