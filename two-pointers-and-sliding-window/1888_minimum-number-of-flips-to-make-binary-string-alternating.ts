function minFlips(s: string): number {
  const n = s.length;
  let result: number = n;
  s = s + s;

  let alt1 = "",
    alt2 = "";
  for (let i = 0; i < n; i++) {
    if (i & 1) {
      alt1 += "0";
      alt2 += "1";
    } else {
      alt1 += "1";
      alt2 += "0";
    }
  }

  let diff1 = 0;
  let diff2 = 0;

  let l = 0;
  for (let r = 0; r < s.length; r++) {
    if (s[r] !== alt1[r]) diff1++;
    if (s[r] !== alt2[r]) diff2++;

    if (r - l + 1 > n) {
      if (s[l] !== alt1[l]) diff1--;
      if (s[l] !== alt2[l]) diff2--;
      l++;
    }

    if (r - l + 1 === n) {
      result = Math.min(result, diff1, diff2);
    }
  }

  return result;
}

console.log(minFlips("111000"));
console.log(minFlips("010"));
console.log(minFlips("1110"));
