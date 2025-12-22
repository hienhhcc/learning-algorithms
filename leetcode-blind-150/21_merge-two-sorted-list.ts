import {
  arrayToLinkedList,
  ListNode,
  printLinkedList,
} from "../linked-list/utils";

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummy = new ListNode();
  let curr = dummy;

  while (list1 != null && list2 != null) {
    if (list1.val < list2.val) {
      curr.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      curr.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    curr = curr.next;
  }

  while (list1 != null) {
    curr.next = new ListNode(list1.val);
    list1 = list1.next;
    curr = curr.next;
  }

  while (list2 != null) {
    curr.next = new ListNode(list2.val);
    list2 = list2.next;
    curr = curr.next;
  }

  return dummy.next;
}

printLinkedList(
  mergeTwoLists(arrayToLinkedList([-9, 3]), arrayToLinkedList([5, 7]))
);
printLinkedList(
  mergeTwoLists(arrayToLinkedList([1, 2, 4]), arrayToLinkedList([1, 3, 4]))
);
printLinkedList(mergeTwoLists(arrayToLinkedList([]), arrayToLinkedList([])));
printLinkedList(mergeTwoLists(arrayToLinkedList([]), arrayToLinkedList([0])));
