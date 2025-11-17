import { arrayToList, ListNode } from "./utils";

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let curr = l1;
  let prev1 = null;
  while (curr) {
    const temp = curr.next;
    curr.next = prev1;
    prev1 = curr;
    curr = temp;
  }

  curr = l2;
  let prev2 = null;
  while (curr) {
    const temp = curr.next;
    curr.next = prev2;
    prev2 = curr;
    curr = temp;
  }

  let dummy = new ListNode();
  let result = dummy;
  let carry = 0;
  while (prev1 != null || prev2 != null || carry) {
    const val1 = prev1 ? prev1.val : 0;
    const val2 = prev2 ? prev2.val : 0;
    const plusResult = val1 + val2 + carry;
    carry = Math.floor(plusResult / 10);
    result.next = new ListNode(plusResult % 10);

    prev1 = prev1?.next ?? null;
    prev2 = prev2?.next ?? null;
    result = result.next;
  }
  curr = dummy.next;
  let prev = null;
  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
}

console.log(addTwoNumbers(arrayToList([7, 2, 4, 3]), arrayToList([5, 6, 4])));
console.log(addTwoNumbers(arrayToList([2, 4, 3]), arrayToList([5, 6, 4])));
console.log(addTwoNumbers(arrayToList([0]), arrayToList([0])));
