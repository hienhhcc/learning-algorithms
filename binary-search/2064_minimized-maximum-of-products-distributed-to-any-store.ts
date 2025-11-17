function minimizedMaximum(n: number, quantities: number[]): number {
  function canDistribute(cap: number): boolean {
    let count = 0;

    for (let i = 0; i < quantities.length; i++) {
      count += Math.ceil(quantities[i] / cap);
    }

    return count <= n;
  }

  let low = 0;
  let high = Math.max(...quantities);
  let result = high;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);

    if (canDistribute(middle)) {
      result = middle;
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return result;
}

console.log(minimizedMaximum(6, [11, 6]));
console.log(minimizedMaximum(7, [15, 10, 10]));
console.log(minimizedMaximum(1, [100000]));
