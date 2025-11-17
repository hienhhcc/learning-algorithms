import { arrayToTree, TreeNode } from "../binary-trees/utils";

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root == null) return new TreeNode(val);

  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }
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
