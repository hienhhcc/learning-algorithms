import { arrayToTree, TreeNode } from "../binary-trees/utils";

function maxDepth(root: TreeNode | null): number {
  if (root == null) return 0;

  const max = Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;

  return max;
}

console.log(maxDepth(arrayToTree([3, 9, 20, null, null, 15, 7])));
console.log(maxDepth(arrayToTree([1, null, 2])));
