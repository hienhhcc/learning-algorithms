function miniMaxSum(arr: number[]): void {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((prev, curr) => prev + curr, 0);

  console.log(`${sum - max} ${sum - min}`);
}

miniMaxSum([1, 3, 5, 7, 9]);
miniMaxSum([1, 2, 3, 4, 5]);
