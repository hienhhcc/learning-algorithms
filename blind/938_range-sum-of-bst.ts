import { arrayToTree, TreeNode } from "../binary-trees/utils";

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  let result = 0;
  function dfs(node: TreeNode | null) {
    if (node == null) return;

    if (node.val >= low && node.val <= high) result += node.val;

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return result;
}

console.log(rangeSumBST(arrayToTree([10, 5, 15, 3, 7, null, 18]), 7, 15));
console.log(
  rangeSumBST(arrayToTree([10, 5, 15, 3, 7, 13, 18, 1, null, 6]), 6, 10)
);
