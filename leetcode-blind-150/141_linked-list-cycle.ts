import { arrayToLinkedList, ListNode } from "../linked-list/utils";

function hasCycle(head: ListNode | null): boolean {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow?.next!;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
}

// console.log(hasCycle(arrayToList([3, 2, 0, -4])));
// console.log(hasCycle(arrayToList([1, 2])));
// console.log(hasCycle(arrayToList([1])));
