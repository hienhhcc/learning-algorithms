import { arrayToList, ListNode } from "../linked-list/utils";

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let curr: ListNode | null = head;

  let index = 1;
  let nodeBeforeReverse: ListNode | null = null;
  let nodeAfterReverse: ListNode | null = null;
  let curr1: ListNode | null = null;
  let lastNodeToReverse: ListNode | null = null;
  while (curr) {
    if (index === left) {
      curr1 = curr;
    }

    if (index === right) {
      lastNodeToReverse = curr;
    }

    if (index === left - 1) {
      nodeBeforeReverse = curr;
    }

    if (index === right + 1) {
      nodeAfterReverse = curr;
    }
    curr = curr?.next ?? null;
    index++;
  }

  let index1 = left;
  let prev: ListNode | null = nodeAfterReverse;
  while (curr1 && index1 <= right) {
    const temp = curr1.next;
    curr1.next = prev;
    prev = curr1;
    curr1 = temp;
    index1++;
  }
  if (nodeBeforeReverse) {
    nodeBeforeReverse.next = prev;
  }

  return left === 1 ? lastNodeToReverse : head;
}

console.log(reverseBetween(arrayToList([1, 2, 3, 4, 5]), 2, 4));
// console.log(reverseBetween(arrayToList([5]), 1, 1));
