import { arrayToTree, TreeNode } from "../binary-trees/utils";

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root == null) return false;
  if (root.left == null && root.right === null) {
    return root.val === targetSum;
  }

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}

console.log(
  hasPathSum(
    arrayToTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]),
    22
  )
);
console.log(hasPathSum(arrayToTree([1, 2, 3]), 5));
console.log(hasPathSum(arrayToTree([]), 0));
