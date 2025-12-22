import { arrayToLinkedList, ListNode } from "./utils";

function reorderList(head: ListNode | null): void {
  //* Find the middle
  let slow = head,
    fast = head?.next;
  while (fast && fast.next) {
    slow = slow?.next!;
    fast = fast.next.next;
  }

  //* Reverse the second half
  let second = slow?.next;
  slow!.next = null;
  let prev = null;
  while (second) {
    const temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }
  //* Merge two halfs
  let first = head;
  second = prev;
  while (second) {
    const temp1: ListNode = first?.next!;
    const temp2: ListNode = second?.next!;
    first!.next = second;
    second!.next = temp1;
    first = temp1;
    second = temp2;
  }
}

const head1 = arrayToLinkedList([1, 2, 3, 4]);
reorderList(head1);
console.log(head1);

const head2 = arrayToLinkedList([1, 2, 3, 4, 5]);
reorderList(head2);
console.log(head2);
