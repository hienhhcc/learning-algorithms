export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function arrayToList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;

  const dummy = new ListNode(0); // dummy head to simplify
  let current = dummy;

  for (const num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }

  return dummy.next; // return real head
}

export function printLinkedList(node: ListNode | null) {
  let curr = node;
  let arr: number[] = [];
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  console.log(arr);
}
