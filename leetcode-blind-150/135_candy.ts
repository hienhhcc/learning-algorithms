function candy(ratings: number[]): number {
  const n = ratings.length;
  const candies: number[] = Array.from({ length: n }, () => 1);

  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  return candies.reduce((prev, curr) => prev + curr, 0);
}

console.log(candy([1, 0, 2]));
console.log(candy([1, 2, 2]));
