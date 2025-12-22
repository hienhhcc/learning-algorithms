import { arrayToLinkedList, ListNode } from "./utils";

function pairSum(head: ListNode | null): number {
  //Find the middle
  let slow = head,
    fast = head?.next;
  while (fast && fast.next) {
    slow = slow?.next!;
    fast = fast.next.next;
  }
  //Reverse the second half
  let second = slow?.next;
  slow!.next = null;
  let prev = null;
  while (second) {
    const temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }
  //Calculate the maximum twin sum
  let first = head;
  second = prev;
  let maxPairSum = 0;
  while (second) {
    maxPairSum = Math.max(maxPairSum, first!.val + second!.val);
    first = first?.next!;
    second = second?.next!;
  }

  return maxPairSum;
}

console.log(pairSum(arrayToLinkedList([5, 4, 2, 1])));
console.log(pairSum(arrayToLinkedList([4, 2, 2, 3])));
console.log(pairSum(arrayToLinkedList([1, 100000])));
