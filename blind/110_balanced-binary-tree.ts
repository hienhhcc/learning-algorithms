import { arrayToTree, TreeNode } from "../binary-trees/utils";

function dfsHeight(root: TreeNode | null): number {
  if (root == null) return 0;

  let height = 0;

  const depthOfLeftTree = dfsHeight(root.left);
  const depthOfRightTree = dfsHeight(root.right);
  height = Math.max(depthOfLeftTree, depthOfRightTree) + 1;

  return height;
}

function isBalanced(root: TreeNode | null): boolean {
  if (root == null) return true;

  const leftTreeHeight = dfsHeight(root.left);
  const rightTreeHeight = dfsHeight(root.right);

  return (
    Math.abs(leftTreeHeight - rightTreeHeight) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
}

console.log(isBalanced(arrayToTree([3, 9, 20, null, null, 15, 7])));
console.log(isBalanced(arrayToTree([1, 2, 2, 3, 3, null, null, 4, 4])));
console.log(isBalanced(arrayToTree([])));
