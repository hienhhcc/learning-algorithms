function mySqrt(x: number): number {
  let low = 0;
  let high = x;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    const cal = middle * middle;
    if (cal > x) {
      high = middle - 1;
    } else if (cal < x) {
      low = middle + 1;
    } else return middle;
  }

  return high;
}

console.log(mySqrt(4));
console.log(mySqrt(8));
