import { arrayToTree, TreeNode } from "../binary-trees/utils";

function evaluateTree(root: TreeNode | null): boolean | undefined {
  if (root == null) return;

  if (root.left == null && root.right == null) return Boolean(root.val);

  if (root.val === 2) {
    return evaluateTree(root.left) || evaluateTree(root.right);
  }

  return evaluateTree(root.left) && evaluateTree(root.right);
}

console.log(evaluateTree(arrayToTree([2, 1, 3, null, null, 0, 1])));
console.log(evaluateTree(arrayToTree([0])));
