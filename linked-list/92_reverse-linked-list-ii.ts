import { arrayToList, ListNode } from "./utils";

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let beforeReversePointNode = null,
    afterReversePointNode = null,
    beginReverseNode;

  let dummy = new ListNode(0, head);
  let curr = head;
  let index = 1;
  while (curr) {
    if (index === left - 1) {
      beforeReversePointNode = curr;
    } else if (index === right + 1) {
      afterReversePointNode = curr;
    } else if (index === left) {
      beginReverseNode = curr;
    }
    curr = curr.next;
    index++;
  }

  let prev = null;
  curr = beginReverseNode!;
  while (curr && curr !== afterReversePointNode) {
    const temp: ListNode | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  beginReverseNode!.next = afterReversePointNode;
  if (beforeReversePointNode) {
    beforeReversePointNode.next = prev;
  } else {
    return prev;
  }

  return dummy.next;
}

// console.log(reverseBetween(arrayToList([1, 2, 3, 4, 5]), 2, 4));
// console.log(reverseBetween(arrayToList([5]), 1, 1));
console.log(reverseBetween(arrayToList([3, 5]), 1, 2));
