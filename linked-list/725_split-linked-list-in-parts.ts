import { arrayToList, ListNode } from "./utils";

function splitListToParts(
  head: ListNode | null,
  k: number
): Array<ListNode | null> {
  let curr = head;
  let length = 0;
  while (curr) {
    length++;
    curr = curr.next;
  }

  const minPartLength = Math.floor(length / k);
  let maxPartNums = length % k;

  const result: (ListNode | null)[] = [];
  curr = head;
  let currLength = 1;
  let remainingListLength = length;
  let currPathLength = maxPartNums > 0 ? minPartLength + 1 : minPartLength;
  let dummy = new ListNode(0, head);

  while (curr) {
    if (maxPartNums === 0) {
      currPathLength = minPartLength;
    }
    if (currLength === currPathLength) {
      const temp = curr.next;
      curr.next = null;
      result.push(dummy.next);
      dummy.next = temp;
      curr = temp;
      remainingListLength -= currLength;
      maxPartNums--;
      currLength = 1;
    } else {
      currLength++;
      curr = curr.next;
    }
  }

  while (result.length !== k) {
    result.push(null);
  }

  return result;
}

console.log(splitListToParts(arrayToList([1, 2, 3]), 5));
console.log(splitListToParts(arrayToList([0, 1, 2, 3, 4]), 4));
console.log(splitListToParts(arrayToList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 3));
