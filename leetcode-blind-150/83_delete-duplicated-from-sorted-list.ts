import {
  arrayToLinkedList,
  ListNode,
  printLinkedList,
} from "../linked-list/utils";

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head == null) {
    return null;
  }

  let dummy = head;
  let hashset = new Set<number>();
  hashset.add(head.val);
  let prev = head;
  let curr = head.next;

  while (curr) {
    if (hashset.has(curr.val)) {
      prev.next = curr.next;
      curr = curr.next;
    } else {
      prev = curr;
      hashset.add(curr.val);
      curr = curr.next;
    }
  }

  return dummy;
}

printLinkedList(deleteDuplicates(arrayToLinkedList([1, 1, 2])));
printLinkedList(deleteDuplicates(arrayToLinkedList([1, 1, 2, 3, 3])));
