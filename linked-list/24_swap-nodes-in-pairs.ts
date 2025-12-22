import { arrayToLinkedList, ListNode } from "./utils";

function swapPairs(head: ListNode | null): ListNode | null {
  let dummy = new ListNode(0, head);
  let prev = dummy;
  let a = head;
  let b = head?.next;
  while (b != null) {
    const temp = b.next;
    b.next = a;
    a!.next = temp;

    prev.next = b;

    prev = a!;
    a = temp;
    b = temp?.next;
  }

  return dummy.next;
}

console.log(swapPairs(arrayToLinkedList([1, 2, 3, 4])));
console.log(swapPairs(arrayToLinkedList([])));
console.log(swapPairs(arrayToLinkedList([1])));
console.log(swapPairs(arrayToLinkedList([1, 2, 3])));
