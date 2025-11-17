import { arrayToTree, TreeNode } from "./utils";

function tree2str(root: TreeNode): string {
  if (root.left == null && root.right == null) {
    return `${root.val}`;
  } else if (root.left == null && root.right != null) {
    return `${root.val}()(${tree2str(root.right)})`;
  } else if (root.left != null && root.right == null) {
    return `${root.val}(${tree2str(root.left)})`;
  } else if (root.left != null && root.right != null) {
    return `${root.val}(${tree2str(root.left)})(${tree2str(root.right)})`;
  }

  return "";
}

console.log(tree2str(arrayToTree([1, 2, 3, 4])!));
console.log(tree2str(arrayToTree([1, 2, 3, null, 4])!));
