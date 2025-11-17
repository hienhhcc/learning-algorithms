function kthGrammar(n: number, k: number): number {
  let res = 0;

  let l = 0,
    r = Math.pow(2, n);

  for (let i = 0; i < n; i++) {
    const m = Math.floor((l + r) / 2);
    if (m >= k) {
      r = m;
    } else {
      l = m + 1;
      res = res === 0 ? 1 : 0;
    }
  }

  return res;
}

console.log(kthGrammar(1, 1)); //0
console.log(kthGrammar(2, 1)); //0
console.log(kthGrammar(2, 2)); //1
