import { arrayToList, ListNode } from "./utils";

function sortList(head: ListNode | null): ListNode | null {
  const arr: number[] = [];

  let curr = head;
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  arr.sort((a, b) => a - b);

  curr = head;
  for (let i = 0; i < arr.length; i++) {
    curr!.val = arr[i];
    curr = curr?.next ?? null;
  }

  return head;
}

console.log(sortList(arrayToList([4, 2, 1, 3])));
console.log(sortList(arrayToList([-1, 5, 3, 4, 0])));
console.log(sortList(arrayToList([])));
