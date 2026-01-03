import { arrayToTree, TreeNode } from "../binary-trees/utils";

function isSymmetric(root: TreeNode | null): boolean {
  if (root == null) return true;

  function dfs(left: TreeNode | null, right: TreeNode | null): boolean {
    if (left == null && right == null) return true;

    if (left == null || right == null) return false;

    return (
      left.val === right.val &&
      dfs(left.left, right.right) &&
      dfs(left.right, right.left)
    );
  }

  return dfs(root.left, root.right);
}

console.log(isSymmetric(arrayToTree([1, 2, 2, 3, 4, 4, 3])));
console.log(isSymmetric(arrayToTree([1, 2, 2, null, 3, null, 3])));
