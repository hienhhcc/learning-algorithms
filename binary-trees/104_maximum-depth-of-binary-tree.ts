import { arrayToTree, TreeNode } from "./utils";

function maxDepth(root: TreeNode | null): number {
  let depth = 1;
  if (root == null) {
    return 0;
  }

  const depthOfLeftTree = maxDepth(root.left) + 1;
  const depthOfRightTree = maxDepth(root.right) + 1;
  depth = Math.max(depthOfLeftTree, depthOfRightTree);

  return depth;
}

console.log(maxDepth(arrayToTree([3, 9, 20, null, null, 15, 7])));
console.log(maxDepth(arrayToTree([1, null, 2])));
