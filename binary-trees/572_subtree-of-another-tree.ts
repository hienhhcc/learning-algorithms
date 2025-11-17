import { arrayToTree, TreeNode } from "./utils";

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  function isSameTree(tree1: TreeNode | null, tree2: TreeNode | null): boolean {
    if (tree1 == null && tree2 == null) return true;
    if (tree1 == null || tree2 == null) return false;
    if (tree1.val !== tree2.val) return false;

    return (
      isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right)
    );
  }

  if (subRoot == null) return true;
  if (root == null) return false;
  if (isSameTree(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

console.log(isSubtree(arrayToTree([3, 4, 5, 1, 2]), arrayToTree([4, 1, 2])));
console.log(
  isSubtree(
    arrayToTree([3, 4, 5, 1, 2, null, null, null, null, 0]),
    arrayToTree([4, 1, 2])
  )
);
