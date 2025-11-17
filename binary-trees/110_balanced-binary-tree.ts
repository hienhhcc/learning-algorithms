import { arrayToTree, TreeNode } from "./utils";

function isBalanced(root: TreeNode | null): boolean {
  if (root == null) {
    return true;
  }

  function dfsHeight(node: TreeNode | null): number {
    if (node == null) {
      return 0;
    }

    const depthOfLeftTree = dfsHeight(node.left);
    const depthOfRightTree = dfsHeight(node.right);

    return Math.max(depthOfLeftTree, depthOfRightTree) + 1;
  }

  return (
    Math.abs(dfsHeight(root.left) - dfsHeight(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
}

console.log(isBalanced(arrayToTree([3, 9, 20, null, null, 15, 7])));
console.log(isBalanced(arrayToTree([1, 2, 2, 3, 3, null, null, 4, 4])));
console.log(
  isBalanced(arrayToTree([1, 2, 2, 3, null, null, 3, 4, null, null, 4]))
);
console.log(isBalanced(arrayToTree([])));
