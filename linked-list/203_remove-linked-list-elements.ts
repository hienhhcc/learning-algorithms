import { arrayToLinkedList, ListNode } from "./utils";

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let prev = dummy;
  let curr = head;

  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }

  return dummy.next;
}

console.log(removeElements(arrayToLinkedList([1, 2, 6, 3, 4, 5, 6]), 6));
// console.log(removeElements(arrayToList([]), 1));
// console.log(removeElements(arrayToList([7, 7, 7, 7]), 7));
