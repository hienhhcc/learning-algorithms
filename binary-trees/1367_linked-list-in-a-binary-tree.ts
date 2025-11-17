import { arrayToList, ListNode } from "../linked-list/utils";
import { arrayToTree, TreeNode } from "./utils";

function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {
  if (helper(head, root)) return true;
  if (root == null) return false;

  return isSubPath(head, root.left) || isSubPath(head, root.right);
}

function helper(head: ListNode | null, root: TreeNode | null): boolean {
  if (head == null) return true;
  if (root == null || head.val !== root.val) return false;

  return helper(head.next, root.left) || helper(head.next, root.right);
}

console.log(
  isSubPath(
    arrayToList([1, 4, 2, 6, 8]),
    arrayToTree([
      1,
      4,
      4,
      null,
      2,
      2,
      null,
      1,
      null,
      6,
      8,
      null,
      null,
      null,
      null,
      1,
      3,
    ])
  )
);
console.log(
  isSubPath(
    arrayToList([1, 4, 2, 6]),
    arrayToTree([
      1,
      4,
      4,
      null,
      2,
      2,
      null,
      1,
      null,
      6,
      8,
      null,
      null,
      null,
      null,
      1,
      3,
    ])
  )
);
console.log(
  isSubPath(
    arrayToList([4, 2, 8]),
    arrayToTree([
      1,
      4,
      4,
      null,
      2,
      2,
      null,
      1,
      null,
      6,
      8,
      null,
      null,
      null,
      null,
      1,
      3,
    ])
  )
);
