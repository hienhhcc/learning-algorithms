function plusMinus(arr: number[]): void {
  function formatNumber(num: number) {
    return Intl.NumberFormat("en-US", { minimumFractionDigits: 6 }).format(num);
  }

  let countPositives = 0,
    countNegatives = 0,
    countZeros = 0;

  const n = arr.length;

  for (let i = 0; i < n; i++) {
    const value = arr[i];
    if (value < 0) countNegatives++;
    else if (value === 0) countZeros++;
    else countPositives++;
  }

  console.log(formatNumber(countPositives / n));
  console.log(formatNumber(countNegatives / n));
  console.log(formatNumber(countZeros / n));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
plusMinus([1, 1, 0, -1, -1]);
