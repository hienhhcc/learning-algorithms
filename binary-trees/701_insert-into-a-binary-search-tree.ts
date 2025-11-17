import { arrayToTree, TreeNode } from "./utils";

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root == null) {
    return new TreeNode(val, null, null);
  }

  function dfs(node: TreeNode | null) {
    if (node == null) {
      return new TreeNode(val);
    }

    if (val > node.val) {
      node.right = dfs(node.right);
    } else if (val < node.val) {
      node.left = dfs(node.left);
    }

    return node;
  }

  root = dfs(root);
  return root;
}

console.log(insertIntoBST(arrayToTree([4, 2, 7, 1, 3]), 5));
console.log(insertIntoBST(arrayToTree([40, 20, 60, 10, 30, 50, 70]), 25));
console.log(
  insertIntoBST(
    arrayToTree([4, 2, 7, 1, 3, null, null, null, null, null, null]),
    5
  )
);
