import { arrayToList, ListNode } from "./utils";

function middleNode(head: ListNode | null): ListNode | null {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow?.next!;
    fast = fast.next.next;
  }

  return slow;
}

console.log(middleNode(arrayToList([1, 2, 3, 4, 5])));
console.log(middleNode(arrayToList([1, 2, 3, 4, 5, 6])));
