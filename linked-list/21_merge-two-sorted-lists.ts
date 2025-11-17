import { arrayToList, ListNode } from "./utils";

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let dummy = new ListNode(0, null);

  let curr = dummy;

  while (list1 && list2) {
    if (list1.val >= list2.val) {
      curr.next = list2;
      list2 = list2.next;
    } else {
      curr.next = list1;
      list1 = list1.next;
    }
    curr = curr.next;
  }

  if (list1) {
    curr.next = list1;
  } else {
    curr.next = list2;
  }

  return dummy.next;
}

console.log(mergeTwoLists(arrayToList([1, 2, 4]), arrayToList([1, 3, 4])));
console.log(mergeTwoLists(arrayToList([]), arrayToList([])));
console.log(mergeTwoLists(arrayToList([]), arrayToList([0])));
