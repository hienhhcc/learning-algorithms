function finalPrices(prices: number[]): number[] {
  const result: number[] = Array.from(prices);
  const stack: number[] = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[stack[stack.length - 1]] >= prices[i]) {
      const index = stack.pop()!;
      result[index] -= prices[i];
    }

    stack.push(i);
  }

  return result;
}

console.log(finalPrices([8, 4, 6, 2, 3]));
console.log(finalPrices([1, 2, 3, 4, 5]));
console.log(finalPrices([10, 1, 1, 6]));
