import { arrayToList, ListNode } from "./utils";

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  const hashSet = new Set<ListNode>();

  let currA = headA;
  while (currA) {
    hashSet.add(currA);
    currA = currA.next;
  }

  let currB = headB;
  while (currB) {
    if (hashSet.has(currB)) {
      return currB;
    }
    currB = currB.next;
  }

  return null;
}
