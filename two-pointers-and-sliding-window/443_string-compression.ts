function compress(chars: string[]): number {
  const n = chars.length;

  let l = 0,
    k = 0;

  while (l < n) {
    chars[k++] = chars[l];
    let r = l + 1;

    while (r < n && chars[r] === chars[l]) {
      r++;
    }

    if (r - l > 1) {
      const cnt = (r - l).toString();

      for (const c of cnt) {
        chars[k++] = c;
      }
    }

    l = r;
  }

  return k;
}

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
console.log(compress(["a"]));
console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
);
