import { arrayToLinkedList, ListNode, printLinkedList } from "./utils";

function removeNodes(head: ListNode | null): ListNode | null {
  const stack: number[] = [];
  let curr = head;
  while (curr) {
    while (stack && stack[stack.length - 1] < curr.val) {
      stack.pop();
    }
    stack.push(curr.val);
    curr = curr.next;
  }

  let currNewHead = new ListNode(stack[0], null);
  let dummy = new ListNode(0, currNewHead);

  for (let i = 1; i < stack.length; i++) {
    currNewHead.next = new ListNode(stack[i], null);
    currNewHead = currNewHead.next;
  }

  return dummy.next;
}

printLinkedList(removeNodes(arrayToLinkedList([5, 12, 13, 3, 8])));
printLinkedList(removeNodes(arrayToLinkedList([1, 1, 1, 1])));
