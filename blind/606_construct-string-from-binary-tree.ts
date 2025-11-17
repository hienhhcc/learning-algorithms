import { arrayToTree, TreeNode } from "../binary-trees/utils";

function tree2str(root: TreeNode): string {
  if (root.left && root.right) {
    return `${root.val}(${tree2str(root.left)})(${tree2str(root.right)})`;
  } else if (root.left) {
    return `${root.val}(${tree2str(root.left)})`;
  } else if (root.right) {
    return `${root.val}()(${tree2str(root.right)})`;
  } else {
    return root.val.toString();
  }
}

console.log(tree2str(arrayToTree([1, 2, 3, 4])!));
console.log(tree2str(arrayToTree([1, 2, 3, null, 4])!));
