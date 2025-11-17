function maximumRemovals(s: string, p: string, removable: number[]): number {
  function canRemove(cap: number): boolean {
    const removed = new Set(removable.slice(0, cap));
    let j = 0;
    for (let i = 0; i < s.length && j < p.length; i++) {
      if (removed.has(i)) continue;
      if (p[j] === s[i]) j++;
    }

    return j === p.length;
  }

  let l = 0,
    r = removable.length;
  let result = 0;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (canRemove(m)) {
      result = m;
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return result;
}

console.log(maximumRemovals("abcacb", "ab", [3, 1, 0]));
console.log(maximumRemovals("abcbddddd", "abcd", [3, 2, 1, 4, 5, 6]));
console.log(maximumRemovals("abcab", "abc", [0, 1, 2, 3, 4]));
console.log(
  maximumRemovals("qobftgcueho", "obue", [5, 3, 0, 6, 4, 9, 10, 7, 2, 8])
);
