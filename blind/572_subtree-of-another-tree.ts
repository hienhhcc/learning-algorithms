import { arrayToTree, TreeNode } from "../binary-trees/utils";

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (root == null) return subRoot == null;

  if (isSameTree(root, subRoot)) return true;

  return isSubtree(root?.left, subRoot) || isSubtree(root?.right, subRoot);
}

function isSameTree(a: TreeNode | null, b: TreeNode | null): boolean {
  if (a == null && b == null) return true;
  if (a == null || b == null) return false;
  if (a.val !== b.val) return false;
  return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
}

console.log(isSubtree(arrayToTree([3, 4, 5, 1, 2]), arrayToTree([4, 1, 2])));
console.log(
  isSubtree(
    arrayToTree([3, 4, 5, 1, 2, null, null, null, null, 0]),
    arrayToTree([4, 1, 2])
  )
);
