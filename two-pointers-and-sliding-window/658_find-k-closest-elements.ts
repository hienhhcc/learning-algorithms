function findClosestElements(arr: number[], k: number, x: number): number[] {
  const n = arr.length;

  let l = 0;
  let r = n - 1;

  while (r - l >= k) {
    if (Math.abs(x - arr[l]) <= Math.abs(x - arr[r])) {
      r--;
    } else {
      l++;
    }
  }

  return arr.slice(l, r + 1);
}

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 5));
console.log(findClosestElements([1, 1, 2, 3, 4, 5], 4, -1));
