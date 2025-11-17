import { arrayToTree, TreeNode } from "./utils";

function evaluateTree(root: TreeNode | null): boolean | undefined {
  if (root == null) {
    return undefined;
  }

  if (root.val === 0 || root.val === 1) {
    return Boolean(root.val);
  }

  if (root.val === 2) {
    return evaluateTree(root?.left) || evaluateTree(root?.right);
  }

  if (root.val === 3) {
    return (
      (evaluateTree(root?.left) ?? true) && (evaluateTree(root?.right) ?? true)
    );
  }
}

console.log(evaluateTree(arrayToTree([2, 1, 3, null, null, 0, 1])));
console.log(evaluateTree(arrayToTree([0])));
