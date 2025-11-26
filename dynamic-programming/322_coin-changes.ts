function coinChange(coins: number[], amount: number): number {
  let result = -1;

  function helper(currSum: number, currDepth: number) {
    if (currSum === amount) {
      if (result === -1) result = currDepth;
      else result = Math.min(result, currDepth);
      return;
    }
    if (currSum > amount) return;

    for (let i = 0; i < coins.length; i++) {
      helper(currSum + coins[i], currDepth + 1);
    }
  }

  helper(0, 0);

  return result;
}

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 0));
