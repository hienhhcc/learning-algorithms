import { arrayToTree, TreeNode } from "../binary-trees/utils";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p == null && q == null) return true;
  if (p == null || q == null) return false;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

console.log(isSameTree(arrayToTree([1, 2, 3]), arrayToTree([1, 2, 3])));
console.log(isSameTree(arrayToTree([1, 2]), arrayToTree([1, null, 2])));
console.log(isSameTree(arrayToTree([1, 2, 1]), arrayToTree([1, 1, 2])));
