function decrypt(code: number[], k: number): number[] {
  const n = code.length;

  const absK = Math.abs(k);
  let l = k > 0 ? 1 : n - absK;
  let r = k > 0 ? k : n - 1;

  let sum = 0;
  for (let i = l; i <= r; i++) {
    sum += code[i];
  }

  const result: number[] = Array.from({ length: n }, () => 0);

  for (let i = 0; i < n; i++) {
    result[i] = sum;

    sum -= code[l % n];
    l++;
    r++;
    sum += code[r % n];
  }

  return result;
}

console.log(decrypt([5, 7, 1, 4], 3));
console.log(decrypt([1, 2, 3, 4], 0));
console.log(decrypt([2, 4, 9, 3], -2));
