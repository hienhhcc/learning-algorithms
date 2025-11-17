import { heapify, pop, bubbleUp } from "./utils";

function pickGifts(gifts: number[], k: number): number {
  const n = gifts.length;

  for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
    heapify({ arr: gifts, n, i, type: "max" });
  }

  for (let i = 0; i < k; i++) {
    const max = pop({ arr: gifts, type: "max" });
    const remaining = Math.floor(Math.sqrt(max));
    gifts.push(remaining);
    bubbleUp({ arr: gifts, type: "max" });
  }

  return gifts.reduce((prev, curr) => prev + curr, 0);
}

console.log(pickGifts([25, 64, 9, 4, 100], 4));
console.log(pickGifts([1, 1, 1, 1], 4));
