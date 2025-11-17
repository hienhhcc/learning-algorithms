import { heapify, pop, bubbleUp } from "./utils";

function lastStoneWeight(stones: number[]): number {
  let n = stones.length;

  for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
    heapify({ arr: stones, n, i });
  }

  while (stones.length > 1) {
    const firstStone = pop({ arr: stones, type: "max" });
    const secondStone = pop({ arr: stones, type: "max" });

    const smashValue = firstStone - secondStone;

    if (smashValue !== 0) {
      stones.push(smashValue);
      bubbleUp({ arr: stones, type: "max" });
    }
  }

  if (stones.length === 0) {
    return 0;
  }

  return stones[0];
}

// console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
// console.log(lastStoneWeight([1]));
console.log(lastStoneWeight([10, 4, 2, 10]));
