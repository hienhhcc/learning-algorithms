import { arrayToTree, TreeNode } from "./utils";

function diameterOfBinaryTree(root: TreeNode | null): number {
  let result = 0;

  function dfs(node: TreeNode | null): number {
    if (node == null) {
      return 0;
    }

    const leftDepth = dfs(node.left);
    const rightDepth = dfs(node.right);
    result = Math.max(result, leftDepth + rightDepth);

    return Math.max(leftDepth, rightDepth) + 1;
  }

  dfs(root);
  return result;
}

console.log(diameterOfBinaryTree(arrayToTree([1, 2, 3, 4, 5])));
console.log(diameterOfBinaryTree(arrayToTree([1, 2])));
