function isPerfectSquare(num: number): boolean {
  let low = 1,
    high = num;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    const cal = middle * middle;

    if (cal > num) {
      high = middle - 1;
    } else if (cal < num) {
      low = middle + 1;
    } else return true;
  }

  return false;
}

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));
