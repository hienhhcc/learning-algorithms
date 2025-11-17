import { arrayToList, ListNode } from "./utils";

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const dummy = head;
  let prev = dummy;
  let curr = head?.next;

  while (curr) {
    if (prev && curr.val === prev.val) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }

  return dummy;
}

console.log(deleteDuplicates(arrayToList([1, 1, 2])));
console.log(deleteDuplicates(arrayToList([1, 1, 2, 3, 3])));
