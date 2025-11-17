import { arrayToList, ListNode } from "./utils";

function partition(head: ListNode | null, x: number): ListNode | null {
  let left = new ListNode(),
    right = new ListNode();
  let ltail = left,
    rtail = right;

  while (head) {
    if (head.val < x) {
      ltail.next = head;
      ltail = ltail.next;
    } else {
      rtail.next = head;
      rtail = rtail.next;
    }
    head = head.next;
  }

  ltail.next = right.next;
  rtail.next = null;

  return left.next;
}

console.log(partition(arrayToList([1, 4, 3, 2, 5, 2]), 3));
console.log(partition(arrayToList([2, 1]), 2));
1;
