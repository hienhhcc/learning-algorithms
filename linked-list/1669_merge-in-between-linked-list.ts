import { arrayToList, ListNode, printLinkedList } from "./utils";

function mergeInBetween(
  list1: ListNode | null,
  a: number,
  b: number,
  list2: ListNode | null
): ListNode | null {
  let index = 0;
  const dummy = new ListNode(0, list1);

  let prev = dummy;
  let curr = dummy.next;

  while (curr) {
    if (index > b) {
      break;
    }

    if (index < a) {
      prev = curr;
    }

    curr = curr.next;
    index++;
  }

  let curr2 = list2;

  while (curr2) {
    prev.next = curr2;
    prev = curr2;
    curr2 = curr2.next;
  }

  while (curr) {
    prev.next = curr;
    prev = curr;
    curr = curr.next;
  }

  return dummy.next;
}

console.log(
  printLinkedList(
    mergeInBetween(
      arrayToList([10, 1, 13, 6, 9, 5])!,
      3,
      4,
      arrayToList([1000000, 1000001, 1000002])
    )!
  )
);

console.log(
  printLinkedList(
    mergeInBetween(
      arrayToList([0, 1, 2, 3, 4, 5, 6])!,
      2,
      5,
      arrayToList([1000000, 1000001, 1000002, 1000003, 1000004])
    )!
  )
);
