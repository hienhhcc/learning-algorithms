import { bubbleUp, heapify, pop } from "./utils";

function getFinalState(
  nums: number[],
  k: number,
  multiplier: number
): number[] {
  const n = nums.length;

  for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
    heapify({ arr: nums, n, i, type: "min" });
  }

  for (let i = 0; i < k; i++) {
    const min = pop({ arr: nums, type: "min" });
    const updatedValue = min * multiplier;
    nums.push(updatedValue);
    bubbleUp({ arr: nums, type: "min" });
  }

  return nums;
}

console.log(getFinalState([2, 1, 3, 5, 6], 5, 2));
console.log(getFinalState([1, 2], 3, 4));
