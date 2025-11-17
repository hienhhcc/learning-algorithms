import { arrayToTree, TreeNode } from "../binary-trees/utils";

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (root1 == null && root2 == null) return null;
  if (root1 == null) return root2;
  if (root2 == null) return root1;

  const root = new TreeNode(root1.val + root2.val);
  root.left = mergeTrees(root1.left, root2.left);
  root.right = mergeTrees(root1.right, root2.right);
  return root;
}

console.log(
  mergeTrees(
    arrayToTree([1, 3, 2, 5]),
    arrayToTree([2, 1, 3, null, 4, null, 7])
  )
);

console.log(mergeTrees(arrayToTree([1]), arrayToTree([1, 2])));
