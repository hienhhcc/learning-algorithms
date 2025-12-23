import {
  arrayToLinkedList,
  ListNode,
  printLinkedList,
} from "../linked-list/utils";

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const hashset = new Set<number>();
  const duplicateNums = new Set<number>();

  let dummy = new ListNode(-1);
  dummy.next = head;

  let curr = head;
  while (curr) {
    if (hashset.has(curr.val)) {
      duplicateNums.add(curr.val);
    }
    hashset.add(curr.val);
    curr = curr.next;
  }
  let curr2 = head;
  let prev: ListNode | null = dummy;
  while (curr2) {
    if (duplicateNums.has(curr2.val)) {
      prev.next = curr2.next;
      curr2 = curr2.next;
    } else {
      prev = curr2;
      curr2 = curr2.next;
    }
  }

  return dummy.next;
}

printLinkedList(deleteDuplicates(arrayToLinkedList([1, 2, 3, 3, 4, 4, 5])));
printLinkedList(deleteDuplicates(arrayToLinkedList([1, 1, 1, 2, 3])));
