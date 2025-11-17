import { arrayToList, ListNode } from "./utils";

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  const nums: number[] = [];
  let curr = head;
  while (curr) {
    nums.push(curr.val);
    curr = curr.next;
  }

  const n = nums.length;
  const modK = k % n;
  const result: number[] = Array.from({ length: n });
  for (let i = 0; i < n; i++) {
    result[(i + modK) % n] = nums[i];
  }

  let dummy = new ListNode();
  let prev = dummy;
  for (let i = 0; i < n; i++) {
    prev.next = new ListNode(result[i]);
    prev = prev.next;
  }
  prev.next = null;

  return dummy.next;
}

console.log(rotateRight(arrayToList([1, 2, 3, 4, 5]), 2));
console.log(rotateRight(arrayToList([0, 1, 2]), 4));
