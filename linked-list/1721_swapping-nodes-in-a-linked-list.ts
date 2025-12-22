import { arrayToLinkedList, ListNode } from "./utils";

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  //Calculate the length of the linked list
  let length = 0;
  let curr = head;
  while (curr) {
    length++;
    curr = curr.next;
  }
  //Find the kth and n-kth node and swap value
  let dummy = new ListNode(0, head);
  let index = 0;
  let curr1 = head;
  let first, second;
  while (curr1) {
    if (index + 1 === k) {
      first = curr1;
    } else if (length - index === k) {
      second = curr1;
    }
    curr1 = curr1.next;
    index++;
  }

  if (first && second && first.val !== second.val) {
    const temp = first.val;
    first.val = second.val;
    second.val = temp;
  }

  return dummy.next;
}

console.log(swapNodes(arrayToLinkedList([1]), 1));
// console.log(swapNodes(arrayToList([1, 2, 3, 4, 5]), 2));
// console.log(swapNodes(arrayToList([7, 9, 6, 6, 7, 8, 3, 0, 9, 5]), 5));
