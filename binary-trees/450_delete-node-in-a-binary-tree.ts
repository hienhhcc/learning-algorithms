import { arrayToTree, TreeNode } from "./utils";

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (root == null) {
    return null;
  }

  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    if (root.left == null) {
      return root.right;
    }
    if (root.right == null) {
      return root.left;
    }

    //* Find min value from right subtree
    let curr = root.right;
    while (curr.left) {
      curr = curr.left;
    }
    root.val = curr.val;
    root.right = deleteNode(root.right, curr.val);
  }

  return root;
}

console.log(deleteNode(arrayToTree([5, 3, 6, 2, 4, null, 7]), 3));
console.log(deleteNode(arrayToTree([5, 3, 6, 2, 4, null, 7]), 0));
console.log(deleteNode(arrayToTree([]), 0));
