import { arrayToList, ListNode } from "./utils";

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
  const criticalPoints: number[] = [];
  let i = 1;

  let prev = new ListNode(0, head);
  let curr = head;

  while (curr) {
    const isLocalMaxima =
      curr.next && curr.val > prev.val && curr.val > curr.next.val;
    const isLocalMinima =
      curr.next && curr.val < prev.val && curr.val < curr.next.val;
    if (prev.val !== 0 && (isLocalMaxima || isLocalMinima)) {
      criticalPoints.push(i);
    }
    prev = curr;
    curr = curr.next;
    i++;
  }

  const n = criticalPoints.length;
  if (n < 2) {
    return [-1, -1];
  }

  const minDistances: number[] = [];

  for (let i = 1; i < criticalPoints.length; i++) {
    minDistances.push(criticalPoints[i] - criticalPoints[i - 1]);
  }

  const maxDistance = criticalPoints[n - 1] - criticalPoints[0];
  const minDistance = Math.min(...minDistances);
  return [minDistance, maxDistance];
}

console.log(nodesBetweenCriticalPoints(arrayToList([3, 1])));
console.log(nodesBetweenCriticalPoints(arrayToList([5, 3, 1, 2, 5, 1, 2])));
console.log(
  nodesBetweenCriticalPoints(arrayToList([1, 3, 2, 2, 3, 2, 2, 2, 7]))
);
console.log(
  nodesBetweenCriticalPoints(arrayToList([6, 8, 4, 1, 9, 6, 6, 10, 6]))
);
