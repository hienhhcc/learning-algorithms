import { ListNode, arrayToLinkedList } from "./utils";

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr = head;

  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
}

console.log(reverseList(arrayToLinkedList([1, 2, 3, 4, 5])));
console.log(reverseList(arrayToLinkedList([])));
