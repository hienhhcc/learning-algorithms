import { arrayToLinkedList, ListNode, printLinkedList } from "./utils";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  //Find the length of listnode
  let curr = head;
  let length = 0;
  while (curr) {
    length++;
    curr = curr.next;
  }
  //Remove the length-nth node from the beginning
  let dummy = new ListNode(0, head);
  let prev = dummy;
  let curr1 = head;
  let index = 0;
  while (curr1) {
    if (length - index === n) {
      prev!.next = curr1.next;
      curr1 = curr1.next;
      break;
    } else {
      prev = curr1;
      curr1 = curr1.next;
    }
    index++;
  }

  return dummy.next;
}

printLinkedList(removeNthFromEnd(arrayToLinkedList([1, 2, 3, 4, 5]), 2));
printLinkedList(removeNthFromEnd(arrayToLinkedList([1]), 1));
printLinkedList(removeNthFromEnd(arrayToLinkedList([1, 2]), 1));
