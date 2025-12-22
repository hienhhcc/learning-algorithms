import { arrayToLinkedList, ListNode } from "../linked-list/utils";

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;

  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
}

console.log(reverseList(arrayToLinkedList([1, 2, 3, 4, 5])));
console.log(reverseList(arrayToLinkedList([1, 2])));
console.log(reverseList(arrayToLinkedList([])));
