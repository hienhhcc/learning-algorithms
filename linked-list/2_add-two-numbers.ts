import { arrayToLinkedList, ListNode } from "./utils";

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let dummy = new ListNode();
  let result = dummy;
  let carry = 0;

  while (l1 != null || l2 != null || carry) {
    const l1val = l1 ? l1.val : 0;
    const l2val = l2 ? l2.val : 0;
    const plusResult = l1val + l2val + carry;
    carry = Math.floor(plusResult / 10);
    result.next = new ListNode(plusResult % 10);

    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
    result = result.next;
  }

  return dummy.next;
}

console.log(
  addTwoNumbers(arrayToLinkedList([2, 4, 3]), arrayToLinkedList([5, 6, 4]))
);
console.log(addTwoNumbers(arrayToLinkedList([0]), arrayToLinkedList([0])));
console.log(
  addTwoNumbers(
    arrayToLinkedList([9, 9, 9, 9, 9, 9, 9]),
    arrayToLinkedList([9, 9, 9, 9])
  )
);
