import { ListNode } from "./utils";

function hasCycle(head: ListNode | null): boolean {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow?.next!;

    if (fast === slow) {
      return true;
    }
  }

  return false;
}
