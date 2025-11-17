import { arrayToTree, TreeNode } from "./utils";

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root == null) {
    return null;
  }

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}

console.log(invertTree(arrayToTree([4, 2, 7, 1, 3, 6, 9])));
console.log(invertTree(arrayToTree([2, 1, 3])));
console.log(invertTree(arrayToTree([])));
