function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length;

  cost[n] = 0;

  for (let i = n - 1; i >= 0; i--) {
    if (i !== n - 1) {
      let firstStep, secondStep;
      firstStep = cost[i + 1] + cost[i];
      secondStep = cost[i + 2] + cost[i];

      cost[i] = Math.min(firstStep, secondStep);
    }
  }

  return Math.min(cost[0], cost[1]);
}

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
