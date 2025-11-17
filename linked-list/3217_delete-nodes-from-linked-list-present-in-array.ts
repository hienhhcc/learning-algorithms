import { arrayToList, ListNode } from "./utils";

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
  const hashSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    hashSet.add(nums[i]);
  }

  const dummy = new ListNode(0, head);
  let prev = dummy;
  let curr = head;
  while (curr) {
    if (hashSet.has(curr.val)) {
      prev.next = curr.next!;
      curr = curr.next;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  return dummy.next;
}

console.log(modifiedList([1, 2, 3], arrayToList([1, 2, 3, 4, 5])));
console.log(modifiedList([1], arrayToList([1, 2, 1, 2, 1, 2])));
console.log(modifiedList([5], arrayToList([1, 2, 3, 4])));
