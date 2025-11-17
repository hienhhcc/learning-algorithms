function arrangeCoins(n: number): number {
  let low = 1;
  let high = n;
  let result = low;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    const numberOfCoinsNeeded = (middle / 2) * (middle + 1);

    if (n < numberOfCoinsNeeded) {
      high = middle - 1;
    } else if (n > numberOfCoinsNeeded) {
      low = middle + 1;
      result = middle;
    } else return middle;
  }

  return result;
}

console.log(arrangeCoins(5));
console.log(arrangeCoins(8));
