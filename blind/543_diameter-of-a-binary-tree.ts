import { arrayToTree, TreeNode } from "../binary-trees/utils";

function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = 0;

  function dfs(node: TreeNode | null): number {
    if (node == null) return 0;

    const leftHeight = dfs(node.left);
    const rightHeight = dfs(node.right);
    max = Math.max(max, leftHeight + rightHeight);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  dfs(root);

  return max;
}

console.log(diameterOfBinaryTree(arrayToTree([1, 2, 3, 4, 5])));
console.log(diameterOfBinaryTree(arrayToTree([1, 2])));
