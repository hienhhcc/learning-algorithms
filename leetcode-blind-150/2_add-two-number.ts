import { arrayToList, ListNode } from "../linked-list/utils";

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let dummy = new ListNode();
  let result = dummy;
  let carry = 0;

  while (l1 != null || l2 != null || carry) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    const plusResult = val1 + val2 + carry;

    carry = Math.floor(plusResult / 10);
    result.next = new ListNode(plusResult % 10);

    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
    result = result.next;
  }

  return dummy.next;
}

console.log(addTwoNumbers(arrayToList([2, 4, 3]), arrayToList([5, 6, 4])));
console.log(addTwoNumbers(arrayToList([0]), arrayToList([0])));
console.log(
  addTwoNumbers(arrayToList([9, 9, 9, 9, 9, 9, 9]), arrayToList([9, 9, 9, 9]))
);
