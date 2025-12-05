function canCompleteCircuit(gas: number[], cost: number[]): number {
  const gasSum = gas.reduce((prev, curr) => prev + curr, 0);
  const costSum = cost.reduce((prev, curr) => prev + curr, 0);

  if (gasSum < costSum) return -1;

  let start = 0;
  let total = 0;
  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i];

    if (total < 0) {
      total = 0;
      start = i + 1;
    }
  }
  return start;
}

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
