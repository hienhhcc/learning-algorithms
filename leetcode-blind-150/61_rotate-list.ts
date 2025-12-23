import { arrayToLinkedList, ListNode } from "../linked-list/utils";

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head == null || k === 0) return head;

  //Find the length and tail
  let curr: ListNode | null = head;
  let length = 0;
  let tail = null;
  while (curr) {
    if (curr.next == null) tail = curr;
    curr = curr.next;
    length++;
  }

  // Find the new tail
  const newTailIndex = length - (k % length) - 1;
  curr = head;
  let index = 0;
  let newTail = null;
  while (curr) {
    if (index === newTailIndex) {
      newTail = curr;
    }
    index++;
    curr = curr.next;
  }
  tail!.next = head;
  const newHead = newTail?.next!;
  newTail!.next = null;
  return newHead;
}

console.log(rotateRight(arrayToLinkedList([1, 2, 3, 4, 5]), 2));
console.log(rotateRight(arrayToLinkedList([0, 1, 2]), 4));
