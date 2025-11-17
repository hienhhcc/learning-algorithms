import { arrayToList, ListNode, printLinkedList } from "./utils";

function mergeNodes(head: ListNode): ListNode | null {
  let dummy = new ListNode(0, null);
  let currDummy: ListNode | null = dummy;

  let curr = head.next;
  let sum = 0;
  while (curr) {
    if (curr.val !== 0) {
      sum += curr.val;
    } else {
      currDummy.next = new ListNode(sum, null);
      currDummy = currDummy?.next;
      sum = 0;
    }
    curr = curr.next;
  }

  return dummy.next;
}

printLinkedList(mergeNodes(arrayToList([0, 3, 1, 0, 4, 5, 2, 0])!));
printLinkedList(mergeNodes(arrayToList([0, 1, 0, 3, 0, 2, 2, 0])!));
